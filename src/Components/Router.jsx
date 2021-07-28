import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import ServicesDetails from '../Pages/ServicesDetails';
import '../App.css';

const Router = () => {
    return (
        <BrowserRouter>
            <div className="pages">
                
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/services">Services</Link>
            </div>

            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/about" component={About} ></Route>
            <Route exact path="/contact" component={Contacts} ></Route>
            <Route exact path="/services" component={Services} ></Route>
            <Route exact path="/services/:id" component={ServicesDetails} ></Route>
        </BrowserRouter>
    );
}

export default Router;
