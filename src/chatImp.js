// Create a script element
(function () {
  const script = document.createElement("script");

  // Set the src attribute to the provided URL
  script.src = "https://chat-ui-gpwl.vercel.app/";

  // Optionally, you can set the type and async attribute
  script.type = "text/javascript";
  script.async = true;

  // Append the script tag to the head (or body) of the document
  document.head.appendChild(script);
});
