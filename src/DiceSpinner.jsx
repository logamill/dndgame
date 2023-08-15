import { useState } from "react";
import d20 from '../src/assets/d20.svg';
import '../src/styles/DiceSpinner.css';

const DiceSpinner = ({ setRoll }) => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotationAngle, setRotationAngle] = useState(0);
  
    const handleDiceClick = () => {
      if (!isSpinning) {
        setIsSpinning(true);
  
        // Simulate spinning by gradually increasing the rotation angle
        let currentAngle = 0;
        const rotationInterval = setInterval(() => {
          currentAngle += 10;
          setRotationAngle(currentAngle);
          const newRoll = Math.floor(Math.random() * 20) + 1;

          if (currentAngle >= 360) {
            clearInterval(rotationInterval);
            setTimeout(() => {
              setIsSpinning(false);
              setRotationAngle(0); // Reset rotation angle
            }, 2000); // Stop after 2 seconds
          }
          setRoll(newRoll);

        }, 50); // Adjust interval as needed
      }
    };
  
    const spinnerStyle = {
      transform: `rotate(${rotationAngle}deg)`,
    };
  
    return (
      <div className="dice-container">
        <img
          className={`dice ${isSpinning ? 'spinning' : ''}`}
          src={d20}
          alt="Spinning Dice"
          style={spinnerStyle}
          onClick={handleDiceClick}
        />
      </div>
    );
  };
  export default DiceSpinner;