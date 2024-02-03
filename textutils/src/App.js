import './App.css';
import Navbar from './components/Navbar';
// import Textfrom from './components/Textfrom';
import About from './components/About';

function App() {
  return (
    <>
   <Navbar title="Textutils" />
   <div className="container">
    {/* <Textfrom heading="Enter your text here"/> */}
    <About/>
   </div>
   
   
  </>
  );
}

export default App;
