import './App.css'

function App() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '78px',
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
      <div
        style={{
          width: '4rem',
          height: '4rem',
          backgroundColor: '#f56565',
          position: 'absolute',
          bottom: '0',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 12C17 12.9889 16.7068 13.9556 16.1573 14.7778C15.6079 15.6001 14.827 16.241 13.9134 16.6194C12.9998 16.9978 11.9945 17.0969 11.0245 16.9039C10.0546 16.711 9.16373 16.2348 8.46447 15.5355C7.76521 14.8363 7.289 13.9454 7.09608 12.9754C6.90315 12.0055 7.00217 11.0002 7.3806 10.0866C7.75904 9.17295 8.3999 8.39206 9.22215 7.84265C10.0444 7.29324 11.0111 7 12 7C13.4 7 14.7389 7.55556 15.7444 8.52222L17 9.77778"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.9999 7V9.77778H14.2222"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  )
}

export default App
