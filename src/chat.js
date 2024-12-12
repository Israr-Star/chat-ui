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
  // Create div
  const chatbotDiv = document.createElement("div");
  // Create toggle button
  const toggleButton = document.createElement("div");
  const chatIcon = document.createElement("span");
  chatIcon.innerHTML = "&#128172;"; // Chat icon (speech balloon)
  chatIcon.style.fontSize = "24px";
  chatIcon.style.color = "white";
  chatIcon.style.display = "flex";
  chatIcon.style.alignItems = "center";
  chatIcon.style.justifyContent = "center";
  toggleButton.appendChild(chatIcon);

  const closeIcon = document.createElement("span");
  closeIcon.innerHTML = "&#10006;"; // Cross icon
  closeIcon.style.fontSize = "24px";
  closeIcon.style.color = "white";
  closeIcon.style.display = "none";
  closeIcon.style.alignItems = "center";
  closeIcon.style.justifyContent = "center";
  toggleButton.appendChild(closeIcon);
  toggleButton.style.width = "40px";
  toggleButton.style.height = "40px";
  toggleButton.style.borderRadius = "50%";
  toggleButton.style.backgroundColor = "#007bff";
  toggleButton.style.position = "fixed";
  toggleButton.style.zIndex = "10000";
  toggleButton.style.cursor = "pointer";

  // Set position of toggle button
  if (chatbotConfig.position === "bottom-right") {
    toggleButton.style.bottom = "40px";
    toggleButton.style.right = "20px";
  } else if (chatbotConfig.position === "bottom-left") {
    toggleButton.style.bottom = "40px";
    toggleButton.style.left = "20px";
  }

  // Add click event to toggle iframe visibility
  iframe.style.display = "none"; // Initially hidden
  chatbotDiv.style.display = "none"; // Initially hidden

  toggleButton.onclick = function () {
    if (iframe.style.display === "none") {
      iframe.style.display = "block";
      chatbotDiv.style.display = "block";
      chatIcon.style.display = "none";
      closeIcon.style.display = "flex";
    } else {
      iframe.style.display = "none";
      chatbotDiv.style.display = "none";
      chatIcon.style.display = "flex";
      closeIcon.style.display = "none";
    }
  };

  // Append toggle button to body
  document.body.appendChild(toggleButton);
  chatbotDiv.style.width = chatbotConfig.width;
  chatbotDiv.style.height = chatbotConfig.height;
  // Create header div
  const headerDiv = document.createElement("div");
  headerDiv.style.backgroundColor = "#007bff";
  headerDiv.style.color = "white";
  headerDiv.style.padding = "10px";
  headerDiv.style.textAlign = "center";
  headerDiv.innerText = "Chatbot";

  // Create messages div
  const messagesDiv = document.createElement("div");
  messagesDiv.style.backgroundColor = "#f1f1f1";
  messagesDiv.style.padding = "10px";
  messagesDiv.style.height = "calc(100% - 40px)";
  messagesDiv.style.overflowY = "auto";

  // Append header and messages div to chatbotDiv
  chatbotDiv.appendChild(headerDiv);
  chatbotDiv.appendChild(messagesDiv);
  // Create a sample message from the bot
  const botMessage = document.createElement("div");
  botMessage.style.backgroundColor = "#e1ffc7";
  botMessage.style.padding = "10px";
  botMessage.style.margin = "10px 0";
  botMessage.style.borderRadius = "10px";
  botMessage.innerText = "Hello! How can I assist you today?";

  // Create a sample message from the user
  const userMessage = document.createElement("div");
  userMessage.style.backgroundColor = "#c7e1ff";
  userMessage.style.padding = "10px";
  userMessage.style.margin = "10px 0";
  userMessage.style.borderRadius = "10px";
  userMessage.style.alignSelf = "flex-end";
  userMessage.innerText = "I need help with my account.";

  // Append messages to messagesDiv
  messagesDiv.appendChild(botMessage);
  messagesDiv.appendChild(userMessage);
  chatbotDiv.style.position = "fixed";
  chatbotDiv.style.border = "1px solid #ccc";
  chatbotDiv.style.zIndex = "9999";
  chatbotDiv.style.backgroundColor = "white";

  // Set position
  if (chatbotConfig.position === "bottom-right") {
    chatbotDiv.style.bottom = "90px";
    chatbotDiv.style.right = "20px";
  } else if (chatbotConfig.position === "bottom-left") {
    chatbotDiv.style.bottom = "90px";
    chatbotDiv.style.left = "20px";
  }

  // Append div to body
  document.body.appendChild(chatbotDiv);
})();
