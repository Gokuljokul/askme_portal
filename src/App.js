import React from 'react';
import Portal from './components/Portal';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the React Portal Example</h1>
      <Portal>
        <div className="portal-content">
          This content is rendered in a portal!
        </div>
      </Portal>
    </div>
  );
}

export default App;