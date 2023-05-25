// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import VerifyCertificate from './components/VerifyCertificate'
import ViewCertificate from './components/ViewCertificate'

function App() {
  return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Layout />}>
        </Route>
        <Route exact path="/viewCertificate" element={<ViewCertificate />}>
        </Route>
        </Routes>
        </Router>
 
  );
}

export default App;
