import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: sidebarCollapsed ? '-150px' : '0',
          width: '150px',
          height: '100%',
          backgroundColor: '#333',
          color: 'white',
          transition: 'left 0.3s ease',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {/* Toggle button */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          style={{
            position: 'absolute',
            top: '10px',
            left: '155px',
            fontSize: '1rem',
            marginBottom: '10px',
          }}
        >
          {sidebarCollapsed ? '»' : '«'}
        </button>

        <div style={{ marginTop: '5vh' }}>
          {/* Title Input in Sidebar */}
          {!sidebarCollapsed && (
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                fontSize: '1rem',
                marginBottom: '10px',
                width: '100%',
                marginTop: '10px',
              }}
            />
          )}

          {/* Description Input in Sidebar */}
          {!sidebarCollapsed && (
            <input
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                fontSize: '1rem',
                marginBottom: '20px',
                width: '100%',
                marginTop: '10px',
              }}
            />
          )}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: '150px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Display Title */}
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>{title}</h1>

        {/* Display Description */}
        <p style={{ textAlign: 'center' }}>{description}</p>
      </div>
    </div>
  );
};

export default App;
