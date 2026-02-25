const endpoints = {
  // Projects & Team အတွက်
  portfolio: {
    projects: "projects/projects/",            // GET (All Projects)
    projectDetail: (id) => `projects/projects/${id}/`, // GET (Single Project)
    team: "projects/team/",                    // GET (Team Members)
  },

  // Blog ဆောင်းပါးများအတွက်
  blog: {
    posts: "blog/posts/",                      // GET (All Posts)
    postDetail: (slug) => `blog/posts/${slug}/`, // GET (Single Post by slug)
    categories: "blog/categories/",            // GET (All Categories)
  },

  // Contact Form အတွက်
  contact: {
    submit: "contacts/message/",            // POST (Send inquiry)
  }
};

export default endpoints;