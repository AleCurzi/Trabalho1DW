import React, { useState, useEffect } from 'react';

function BackgroundColorChanger() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colorIndex]);

  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div>
      <button onClick={changeColor}>Change Background Color</button>
      <p>Current Color: {colors[colorIndex]}</p>
    </div>
  );
}

export default BackgroundColorChanger;