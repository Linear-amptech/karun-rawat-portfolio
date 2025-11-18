// utils/scrollToMainContent.js

export const scrollToMainContent = () => {
  // Get the navbar height dynamically
  const navbar = document.querySelector('nav')?.parentElement;
  const navbarHeight = navbar ? navbar.offsetHeight : 90; // fallback to 90px
  
  // Add some extra padding for better visual spacing
  const extraPadding = 20;
  const totalOffset = navbarHeight + extraPadding;

  // Smooth scroll to top with offset to account for fixed navbar
  window.scrollTo({
    top: totalOffset,
    behavior: 'smooth'
  });
};

// Alternative function for scrolling to specific elements
export const scrollToElement = (elementId, additionalOffset = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const navbar = document.querySelector('nav')?.parentElement;
  const navbarHeight = navbar ? navbar.offsetHeight : 90;
  const extraPadding = 20;
  const totalOffset = navbarHeight + extraPadding + additionalOffset;

  const elementPosition = element.offsetTop - totalOffset;

  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
};

// Function to scroll to main content area (for route changes)
export const scrollToMainContentArea = () => {
  // Look for main content area
  const mainContent = document.getElementById('main-content') || 
                     document.querySelector('main') || 
                     document.querySelector('[role="main"]');
  
  if (mainContent) {
    const navbar = document.querySelector('nav')?.parentElement;
    const navbarHeight = navbar ? navbar.offsetHeight : 90;
    const extraPadding = 20;
    const totalOffset = navbarHeight + extraPadding;
    
    const elementPosition = mainContent.offsetTop - totalOffset;
    
    window.scrollTo({
      top: Math.max(0, elementPosition),
      behavior: 'smooth'
    });
  } else {
    // Fallback to regular scroll with offset
    scrollToMainContent();
  }
};