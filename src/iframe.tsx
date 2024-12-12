// IframeWrapper.tsx
import React from 'react';
import Chatbot from './Chatbot'; // Import your original Chatbot component

const IframeWrapper: React.FC = () => {
  return (
    <iframe
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '20px',
        width: '400px',
        height: '600px',
        border: '1px solid #ccc',
        zIndex: 9999,
      }}
      frameBorder="0"
      title="Chatbot"
      srcDoc={`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Chatbot</title>
        </head>
        <body>
          <div id="root"></div>
          <script src="https://unpkg.com/react@18.0.0/umd/react.production.min.js"></script>
          <script src="https://unpkg.com/react-dom@18.0.0/umd/react-dom.production.min.js"></script>
          <script>
            const root = document.getElementById('root');
            ReactDOM.render(React.createElement(${Chatbot.toString()}), root);
          </script>
        </body>
      </html>`}
    ></iframe>
  );
};

export default IframeWrapper;
