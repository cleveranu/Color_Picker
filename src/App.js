import React, { useState } from 'react';
import './App.css'; 

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <h1>Task 3</h1>
      <button onClick={handleButtonClick}>Pick a color</button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p>You picked: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
      )}
    </div>
  );
};

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#ffa500', '#008080', '#800080', '#800000', '#008000', '#fffff0', '#ff69b4'];


  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
