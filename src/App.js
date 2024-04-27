import React from 'react';
import './App.css';
import Header from "./component/layout/Header/Header.js";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import webFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import { Pagination } from 'react-js-pagination';
import LoginSignup from './component/User/LoginSignUp.js';
import { loadUser } from './actions/userAction.js';
import store from "./store.js";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from 'react-redux';
import Prifile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";

// import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();

  const { loading, isAuthenticated, user} = useSelector(state => state.user )
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <Router> 
       <Header />
       {isAuthenticated && (
            <UserOptions user={user} />
        )}
       
       <Routes>
       <Route exact path='/' Component={Home } />
       <Route exact path="/product/:id" Component={ ProductDetails } />
       <Route exact path="/products" Component={ Products } />
       <Route path="/products/:keyword" Component={ Products } />
       <Route exact path="/search" Component={ Search } />
       

       <ProtectedRoute exact path="/account" Component={ Prifile } />

       <Route exact path="/login" Component={ LoginSignup } />
       
       </Routes>
       <Footer />
       </Router>
  );
}

export default App;
