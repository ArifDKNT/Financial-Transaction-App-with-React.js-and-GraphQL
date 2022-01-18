
import React from 'react';
import Transactions from './components/transactions/transactions';
import './App.css';

function App() {
  return (
    <div className="App has-background-light">
      <div className="container-is-fluent">
          <div className="columns">
            <div className="column">
              <Transactions></Transactions>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
