import './App.css';
import Header from'./Templates/Header';
import Footer from './Templates/Footer';
import Main from './Templates/Main';
import Cart from './Components/Cart';
import Cartprovider from './Contexts/Cartcontext';
import Faq from './Pages/Faq';
function App() {
  return (
    <Cartprovider>
    <>
    <Header/>
  <Cart/>
    <Main/>
    <Faq/>
    <Footer/>
    </>
    </Cartprovider>
  );
}

export default App;
