import React, { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    // Start of Tawk.to Script
    var Tawk_API = window.Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/679218b33a8427326073a52e/1ii9b0vfi";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
    // End of Tawk.to Script
    return () => {
      // Optional: Cleanup logic if needed
    };
  }, []);

  return null; // This component only injects the script
};

export default TawkMessenger;
