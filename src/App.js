import './App.css';
import Header from'./Templates/Header';
import Footer from './Templates/Footer';
import Main from './Templates/Main';
import Cartprovider from './Contexts/Cartcontext';
import CheckboxProvider from './Components/Checkbox';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
   
    <CheckboxProvider>
    
    <Cartprovider>
  
    <Header/>
  
    <Main/>
    
    <Footer/>

    </Cartprovider>

    <ScrollToTop/>
    
    </CheckboxProvider>

   
  );
}

export default App;
