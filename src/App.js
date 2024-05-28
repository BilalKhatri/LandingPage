import './App.css';
import Header from '../src/Component/Header'
import GetInTourch from '../src/Component/GetInTourch'
import Footer from '../src/Component/Footer'
import Popup from '../src/Component/popup'
import Home from './Pages/Home';
import Thankyou from './Pages/Thankyou';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>  
    <Header />
    <Routes >
    <Route path='/' element={<Home />} />
    <Route path='/thankyou' element={<Thankyou />} />
    </Routes>
    <GetInTourch />
    <Footer />
    <Popup/>
    </>
  );
}

export default App;
