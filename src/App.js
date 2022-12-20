import './App.css';
import Header from'./Templates/Header';
import Footer from './Templates/Footer';
import Main from './Templates/Main';
import Cart from './Components/Cart';
import Cartprovider from './Contexts/Cartcontext';

function App() {
  return (
  <CheckboxProvider >
    <Cartprovider>
  
    <Header/>
  <Cart/>
    <Main/>
    <Faq/>
    <Footer/>
</Cartprovider>
    </CheckboxProvider>
 

  );
}

export default App;
