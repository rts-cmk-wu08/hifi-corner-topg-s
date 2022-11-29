import './App.css';
import Header from'./Templates/Header'
import Footer from './Templates/Footer'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
    <Header/>

    <Outlet/>

    <Footer/>
    </>
  );
}

export default App;
