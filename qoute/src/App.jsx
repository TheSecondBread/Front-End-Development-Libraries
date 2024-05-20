// App.jsx
import React from 'react';
import Quotes from './Components/Quotes';

function App() {
  return (
    <div id="quote-box"  style={{width:"750px",height:"350px",backgroundColor:"white",padding:"10px",fontFamily:"sans-serif",fontStyle:"italic",borderRadius:"20px" }}>
      <Quotes />
    </div>
  );
}

export default App;
