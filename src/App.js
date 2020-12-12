import logo from "./logo.svg";
import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import "./App.css";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfbfbfb,
          backgroundColor: 0x19191f,
          points: 10.0,
          spacing: 20.0,
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div className="container" ref={myRef}></div>;
}

export default App;
