(function () {
  // Check if the script is already loaded
  if (window.ChatbotScriptLoaded) return;
  window.ChatbotScriptLoaded = true;

  // Configuration object (can be passed via data attributes or hardcoded here)
  const chatbotConfig = {
    botUrl: "https://chat-ui-eight-mu.vercel.app/", // Replace with your chatbot's URL
    width: "400px",
    height: "600px",
    position: "bottom-right", // Options: 'bottom-right', 'bottom-left'
  };

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.src = chatbotConfig.botUrl;
  iframe.style.width = chatbotConfig.width;
  iframe.style.height = chatbotConfig.height;
  iframe.style.position = "fixed";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";

  // Set position
  if (chatbotConfig.position === "bottom-right") {
    iframe.style.bottom = "90px";
    iframe.style.right = "20px";
  } else if (chatbotConfig.position === "bottom-left") {
    iframe.style.bottom = "90px";
    iframe.style.left = "20px";
  }

  // Append iframe to body
  document.body.appendChild(iframe);
})();
