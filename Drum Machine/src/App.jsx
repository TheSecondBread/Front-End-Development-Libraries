import { useState, useRef } from "react";
import "./App.css";

function App() {
  const pads = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const [button, setButton] = useState("Play drums");
  const audioRefs = useRef({});

  const clicked = (drum) => {
    setButton(drum);
    const audio = audioRefs.current[drum];
    if (audio) {
      audio.currentTime = 0; // Reset audio to the beginning
      audio.play().catch(error => console.error('Error playing audio:', error));
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    if (pads.includes(key)) {
      clicked(key);
    }
  };

  return (
    <div
      id="drum-machine"
      style={{
        width: "600px",
        height: "400px",
        border: "5px solid blue",
        backgroundColor: "yellow",
        display: "flex",
        flexWrap: "nowrap",
        alignContent: "center",
        placeItems: "center",
        gap: "80px",
        borderRadius: "10px",
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0} // Ensure the div is focusable to capture key events
    >
      <div
        style={{
          padding: "10px",
          width: "300px",
          height: "350px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          placeContent: "center",
        }}
      >
        {pads.map((drum) => (
          <div
            className="drum-pad"
            onClick={() => clicked(drum)}
            style={{
              width: "80px",
              height: "80px",
              border: "1px solid black",
              justifyContent: "center",
              backgroundColor: "purple",
              borderRadius: "10px",
              alignItems: "center",
              placeContent: "center",
            }}
            key={drum}
            id={drum}
          >
            {drum}
            {/* Add audio element with src attribute and ref */}
            <audio
              ref={(element) => (audioRefs.current[drum] = element)}
              className="clip"
              src={`../audio/${drum}.mp3`}
              id={drum}
            ></audio>
          </div>
        ))}
      </div>
      <div
        id="display"
        style={{
          color: "black",
          width: "180px",
          height: "50px",
          backgroundColor: "lightgray",
        }}
      >
        {button}
      </div>
    </div>
  );
}

export default App;
