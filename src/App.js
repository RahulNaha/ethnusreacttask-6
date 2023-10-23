import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Route,
  Routes // Replace "Switch" with "Routes"
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode", "success");
      document.title = "Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode", "success");
      document.title = "Light Mode";
    }
  }

  return (
    <Router>
      <Navbar title="Rahul Naha" aboutt="Home" Mode={Mode === 'dark'} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes> {/* Use the "Routes" component instead of "Switch" */}
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform />} />
        </Routes>
      </div>
    </Router>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutt: PropTypes.string,
  Mode: PropTypes.bool,
  toggleMode: PropTypes.func,
};

export default App;
