(function () {
    // Check if the script is already loaded
    if (window.ChatbotScriptLoaded) return;
    window.ChatbotScriptLoaded = true;
  
    // Configuration object
    const chatbotConfig = {
      botUrl: "https://chat-ui-dj7x.vercel.app/", // Replace with your chatbot's URL
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
    iframe.style.display = "none"; // Initially hidden
  
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
  
    // Create toggle button
  
    const toggleButtonWrapper = document.createElement("iframe");
  
    // Apply styles to the button
    toggleButtonWrapper.style.width = "40px";
    toggleButtonWrapper.style.height = "40px";
    toggleButtonWrapper.style.borderRadius = "50%";
    toggleButtonWrapper.style.backgroundColor = "#007bff";
    toggleButtonWrapper.style.position = "fixed";
    toggleButtonWrapper.style.bottom = "0";
    toggleButtonWrapper.style.right = "20px";
    toggleButtonWrapper.style.zIndex = "10000";
    toggleButtonWrapper.style.cursor = "pointer";
    toggleButtonWrapper.style.display = "flex";
    toggleButtonWrapper.style.alignItems = "center";
    toggleButtonWrapper.style.justifyContent = "center";
    // Track visibility state
    document.body.appendChild(toggleButtonWrapper);
  
    // Apply styles to the button
    const toggleButton = document.createElement("div");
  
    toggleButton.style.width = "40px";
    toggleButton.style.height = "40px";
    toggleButton.style.borderRadius = "50%";
    toggleButton.style.backgroundColor = "#007bff";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "0";
    toggleButton.style.right = "20px";
    toggleButton.style.zIndex = "10000";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.display = "flex";
    toggleButton.style.alignItems = "center";
    toggleButton.style.justifyContent = "center";
  
    // Create a span element to hold the icon
    const icon = document.createElement("span");
    icon.style.fontSize = "24px";
    icon.style.color = "white";
    icon.innerHTML = "&#128172;"; // Initial icon
  
    toggleButton.appendChild(icon);
  
    // Append the button to the body
    document.body.appendChild(toggleButton);
    let visible = false;
  
    // Add click event listener to toggle the iframe
    toggleButton.addEventListener("click", () => {
      if (iframe.style.display === "none") {
        iframe.style.display = "block";
      } else {
        iframe.style.display = "none";
      }
    });
    //   toggleButtonWrapper.onclick = function () {};
  })();