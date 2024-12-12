import React, { useState } from 'react'

const Chatbot: React.FC = () => {
  const [isChatVisible, setIsChatVisible] = useState(false)

  // Standard dimensions and positioning
  const iframeWidth = '400px'
  const iframeHeight = '600px'

  return (
    <>
      {/* Toggle Button */}
      <div
        onClick={() => setIsChatVisible(!isChatVisible)}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          position: 'fixed',
          zIndex: 10000,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: '40px',
          right: '20px',
        }}
      >
        {isChatVisible ? (
          <span style={{ fontSize: '24px', color: 'white' }}>&#10006;</span> // Close Icon
        ) : (
          <span style={{ fontSize: '24px', color: 'white' }}>&#128172;</span> // Chat Icon
        )}
      </div>

      {/* Chat iframe */}
      {isChatVisible && (
        <iframe
          //   src={
          //     isChatVisible ? 'https://chat-ui-eight-mu.vercel.app/' : undefined
          //   } // Replace with your chatbot URL
          style={{
            width: iframeWidth,
            height: iframeHeight,
            position: 'fixed',
            border: '1px solid #ccc',
            backgroundColor: 'white',
            zIndex: 9999,
            bottom: '90px',
            right: '20px',
            display: isChatVisible ? 'block' : 'none',
          }}
        ></iframe>
      )}
      {isChatVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '400px',
            height: '600px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            Chatbot
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              backgroundColor: '#f1f1f1',
              padding: '10px',
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                backgroundColor: '#e1ffc7',
                padding: '10px',
                margin: '10px 0',
                borderRadius: '10px',
              }}
            >
              Hello! How can I assist you today?
            </div>
            <div
              style={{
                backgroundColor: '#c7e1ff',
                padding: '10px',
                margin: '10px 0',
                borderRadius: '10px',
                alignSelf: 'flex-end',
              }}
            >
              I need help with my account.
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot

// import React, { useState, useEffect } from 'react'

// const Chatbot: React.FC = () => {
//   // State to manage visibility of iframe and chatbot div
//   const [isChatVisible, setChatVisible] = useState(false)
//   const [isLoaded, setIsLoaded] = useState(false)

//   // Configuration for the chatbot
//   //   const chatbotConfig = {
//   //     botUrl: 'https://chat-ui-eight-mu.vercel.app/', // Replace with your chatbot's URL
//   //     width: '400px',
//   //     height: '600px',
//   //     position: 'bottom-right', // Options: 'bottom-right', 'bottom-left'
//   //   }

//   // Load the script only once, similar to your script check
//   //   useEffect(() => {
//   //     if (isLoaded) return // Avoid loading script again

//   //     setIsLoaded(true)

//   //     // Create iframe
//   //     const iframe = document.createElement('iframe')
//   //     iframe.src = chatbotConfig.botUrl
//   //     iframe.style.width = chatbotConfig.width
//   //     iframe.style.height = chatbotConfig.height
//   //     iframe.style.position = 'fixed'
//   //     iframe.style.border = 'none'
//   //     iframe.style.zIndex = '9999'

//   //     // Set position
//   //     if (chatbotConfig.position === 'bottom-right') {
//   //       iframe.style.bottom = '90px'
//   //       iframe.style.right = '20px'
//   //     } else if (chatbotConfig.position === 'bottom-left') {
//   //       iframe.style.bottom = '90px'
//   //       iframe.style.left = '20px'
//   //     }

//   //     // Append iframe to body
//   //     document.body.appendChild(iframe)
//   //   }, [isLoaded, chatbotConfig])

//   const toggleChat = () => {
//     setChatVisible(!isChatVisible)
//   }

//   return (
//     <div>
//       {/* Toggle button */}
//       <div
//         style={{
//           width: '40px',
//           height: '40px',
//           borderRadius: '50%',
//           backgroundColor: '#007bff',
//           position: 'fixed',
//           zIndex: '10000',
//           cursor: 'pointer',
//           bottom: '40px',
//           right: '20px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//         onClick={toggleChat}
//       >
//         <span
//           style={{
//             fontSize: '24px',
//             color: 'white',
//           }}
//         >
//           {isChatVisible ? '✖' : '💬'}
//         </span>
//       </div>

//       {/* Chatbot div */}
//       {isChatVisible && (
//         <div
//           style={{
//             position: 'fixed',
//             bottom: '90px',
//             right: '20px',
//             // width: chatbotConfig.width,
//             // height: chatbotConfig.height,
//             border: '1px solid #ccc',
//             backgroundColor: 'white',
//             zIndex: '9999',
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: '#007bff',
//               color: 'white',
//               padding: '10px',
//               textAlign: 'center',
//             }}
//           >
//             Chatbot
//           </div>

//           <div
//             style={{
//               backgroundColor: '#f1f1f1',
//               padding: '10px',
//               height: 'calc(100% - 40px)',
//               overflowY: 'auto',
//             }}
//           >
//             {/* Sample bot message */}
//             <div
//               style={{
//                 backgroundColor: '#e1ffc7',
//                 padding: '10px',
//                 margin: '10px 0',
//                 borderRadius: '10px',
//               }}
//             >
//               Hello! How can I assist you today?
//             </div>

//             {/* Sample user message */}
//             <div
//               style={{
//                 backgroundColor: '#c7e1ff',
//                 padding: '10px',
//                 margin: '10px 0',
//                 borderRadius: '10px',
//                 alignSelf: 'flex-end',
//               }}
//             >
//               I need help with my account.
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Chatbot
