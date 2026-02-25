// components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Page Pathname ပြောင်းသွားတိုင်း Scroll ကို အပေါ်ဆုံး ပြန်တင်ပေးမယ်
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;