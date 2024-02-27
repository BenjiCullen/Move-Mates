import './App.css';
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import LandingPage from './components/LandingPage'
import Nav from "./components/Nav";
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Cart from './components/Cart';
import Developers from './pages/Developers/Developers'
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import ProductsPage from './components/ProductsPage'
import Detail from './pages/Detail';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory/OrderHistory';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  
})

function App() {
    
    return (
     <ApolloProvider client={client}>
      <BrowserRouter>
       <div id='page-container'>
         <div id="content-wrap" className="App">
          <Nav />
          <Cart /> 
      
                <LandingPage/>
                <Login/>
                <Signup/>
                <ContactUs/>
                <Developers/>
                <ProductsPage/>
                <Detail/>
                <OrderHistory/>
                <Success/>
         

          </div>
          <Footer/>
        </div>
        </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;