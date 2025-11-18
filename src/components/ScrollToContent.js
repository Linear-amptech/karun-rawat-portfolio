// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { scrollToMainContentArea } from "../utils/scrollToMainContent";

// const ScrollToContent = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Add a small delay to ensure the route has fully rendered
//     const timer = setTimeout(() => {
//       if (pathname !== "/") {
//         scrollToMainContentArea();
//       } else {
//         // For home page, scroll to top with navbar offset
//         const navbar = document.querySelector('nav')?.parentElement;
//         const navbarHeight = navbar ? navbar.offsetHeight : 90;
        
//         window.scrollTo({
//           top: navbarHeight,
//           behavior: 'smooth'
//         });
//       }
//     }, 100); // Small delay to ensure DOM is ready

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToContent;