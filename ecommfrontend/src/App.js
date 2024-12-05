import './App.css';
import { Container } from "react-bootstrap";
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';


function App() {
  return (
    <BrowserRouter>
      <Header/>
    <main>
      <Container>
        <Routes>
        <Route exact path="/" element={<HomeScreen />}/>
        <Route path="/products/:id" element={<ProductScreen />} />
        <Route path="/cart/:id?" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </Container>
    </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
