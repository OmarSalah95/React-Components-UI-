import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="calculator">
    <CalculatorDisplay buttonStyle="display"  />
    <div className="button-container">
      <div className="NumberPad">
        <ActionButton buttonStyle="action-button clear" text="Clear" />
        <div className="number-row">
          <NumberButton
            buttonStyle="number-button"
            text="7"
          />
          <NumberButton
            buttonStyle="number-button"
            text="8"
          />
          <NumberButton
            buttonStyle="number-button"
            text="9"
          />
        </div>
        <div className="number-row">
          <NumberButton
            buttonStyle="number-button"
            text="4"
          />
          <NumberButton
            buttonStyle="number-button"
            text="5"
          />
          <NumberButton
            buttonStyle="number-button"
            text="6"
          />
        </div>
        <div className="number-row">
          <NumberButton
            buttonStyle="number-button"
            text="1"
          />
          <NumberButton
            buttonStyle="number-button"
            text="2"
          />
          <NumberButton
            buttonStyle="number-button"
            text="3"
          />
        </div>
        <ActionButton
         buttonStyle="number-button zero" 
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
