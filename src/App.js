import './App.css';
import Header from'./Templates/Header';
import Footer from './Templates/Footer';
import Main from './Templates/Main';

import Cartprovider from './Contexts/Cartcontext';

function App() {
  return (
    <Cartprovider>
  
    <Header/>
  
    <Main/>
    <Faq/>
    <Footer/>
</Cartprovider>
   
 

  );
}

export default App;
