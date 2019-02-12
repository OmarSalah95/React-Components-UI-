import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  

  return (
    <div className="calculator">
    <CalculatorDisplay />
    <div className="button-container">
      <div className="number-pad">
        <ActionButton buttonStyle="action-button clear" text="Clear" />
        <div className="number-row">
          <NumberButton
            buttonStyle="digits"
            text="7"
          />
          <NumberButton
            buttonStyle="digits"
            text="8"
          />
          <NumberButton
            buttonStyle="digits"
            text="9"
          />
        </div>
        <div className="number-row">
          <NumberButton
            buttonStyle="digits"
            text="4"
          />
          <NumberButton
            buttonStyle="digits"
            text="5"
          />
          <NumberButton
            buttonStyle="digits"
            text="6"
          />
        </div>
        <div className="number-row">
          <NumberButton
            buttonStyle="digits"
            text="1"
          />
          <NumberButton
            buttonStyle="digits"
            text="2"
          />
          <NumberButton
            buttonStyle="digits"
            text="3"
          />
        </div>
        <ActionButton
         buttonStyle="digits zero" 
         text="0"
        />
      </div>
      <div className="operator-buttons">
        <ActionButton buttonStyle="action-button operator" text="÷" />
        <ActionButton buttonStyle="action-button operator" text="×" />
        <ActionButton buttonStyle="action-button operator" text="-" />
        <ActionButton buttonStyle="action-button operator" text="+" />
        <ActionButton buttonStyle="action-button operator" text="=" />
      </div>
    </div>
</div>
  );
};

export default App;
