import { useNavigate, useLocation } from "react-router-dom";

export const useContactNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToContact = () => {
    if (location.pathname === "/") {
      // Already on home page, just scroll
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to home then scroll
      navigate("/");
      // Use a longer timeout and retry mechanism
      const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Retry if element not found yet
          setTimeout(scrollToContact, 100);
        }
      };
      setTimeout(scrollToContact, 300);
    }
  };

  return { navigateToContact };
};
