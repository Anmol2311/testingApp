import React from 'react';
import './App.css';
import Footer from './components/footer';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
    <div className="container mt-5">
      <Counter name={'Counter App'} />
      <hr/>
      <Footer />
    </div>
    </div>
  );
}

export default App;
