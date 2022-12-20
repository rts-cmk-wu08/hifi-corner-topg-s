import './App.css';
import Header from'./Templates/Header';
import Footer from './Templates/Footer';
import Main from './Templates/Main';
import CheckboxProvider from './Components/Checkbox';


function App() {
  return (
    <CheckboxProvider >
    <Header/>
    
    <Main/>

    <Footer/>
    </CheckboxProvider>
  );
}

export default App;
