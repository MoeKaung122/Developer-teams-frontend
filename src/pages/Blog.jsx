import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react';
// API files များကို import လုပ်ပါ
import api from '../api/api';
import endpoints from '../api/endpoints';
import HOST from '../api/host';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination အတွက် States များ
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // တစ်မျက်နှာမှာ ပြချင်တဲ့ အပုဒ်ရေ

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Backend မှ Blog အားလုံးကို လှမ်းယူမည်
        const response = await api.get(endpoints.blog.posts);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // ၁။ Search Filter Logic
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.category && post.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // ၂။ Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Page ပြောင်းတိုင်း အပေါ်ဆုံးကို ပြန်သွားရန်
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Header Section */}
      <section className="bg-[#0F172A] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Tech <span className="text-indigo-500">Insights</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            နည်းပညာဆိုင်ရာ ဗဟုသုတများ၊ အတွေ့အကြုံများနှင့် ခေတ်မီ Tips & Tricks များကို ဖတ်ရှုလေ့လာနိုင်ပါသည်။
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Search ရှာတိုင်း page 1 ကို ပြန်သွားမယ်
              }}
              placeholder="ဆောင်းပါးများ ရှာဖွေရန်..."
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-full py-4 px-12 focus:outline-none focus:border-indigo-500 transition"
            />
            <Search className="absolute left-4 top-4 text-slate-500" size={20} />
          </div>
        </div>
      </section>

      {/* 2. Blog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">

        {/* Search လုပ်လို့ ရှာမတွေ့တဲ့ အခြေအနေ */}
        {currentPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">"{searchTerm}" နှင့် ပတ်သက်သော ဆောင်းပါးများ မရှိသေးပါ။</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col">
                {/* Image Container */}
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  {post.thumbnail && (
                    <img
                      src={`${HOST}${post.thumbnail}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      {post.category_name || "Uncategorized"}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                    <div className="flex items-center gap-1 font-medium">
                      <Calendar size={14} />
                      {new Date(post.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1 font-medium">
                      <Clock size={14} />
                      {/* Backend မှာ read_time မရှိရင် default သတ်မှတ်နိုင်တယ် */}
                      {post.read_time || "5 min read"}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Backend က ID သို့မဟုတ် Slug ပေါ်မူတည်ပြီး Link ပြင်ပေးပါ */}
                  <Link to={`/blog/${post.slug || post.id}`} className="mt-auto inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 transition-all group-hover:gap-2">
                    Read More <ArrowRight className="ml-1" size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* 3. Pagination Controls (totalPages 1 ထက်ကြီးမှ ပေါ်မည်) */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${currentPage === 1
                  ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'
                }`}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-all ${currentPage === pageNumber
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                      : 'border border-slate-300 text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${currentPage === totalPages
                  ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'
                }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </section>

      {/* 4. Newsletter Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-indigo-50 to-white p-10 md:p-16 rounded-[3rem] border border-indigo-100/50 shadow-sm">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Stay Updated!</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">ဆောင်းပါးအသစ်တင်တိုင်း အသိပေးချက်ရယူဖို့ Subscribe လုပ်ထားလိုက်ပါ။</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
              <button type="submit" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;