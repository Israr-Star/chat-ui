import React, { useState } from 'react'

const Chatbot: React.FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      {/* Toggle Button */}
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          position: 'fixed',
          bottom: '0',
          right: '20px',
          zIndex: 10000,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setVisible(!visible)}
      >
        {visible ? (
          <span style={{ fontSize: '24px', color: 'white' }}>&#10006;</span>
        ) : (
          <span style={{ fontSize: '24px', color: 'white' }}>&#128172;</span>
        )}
      </div>

      {/* Chatbot UI */}
      {visible && (
        <div
          style={{
            position: 'fixed',
            bottom: '0',
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
