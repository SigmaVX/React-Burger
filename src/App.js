import React, { Component } from 'react';
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Switch, Route, BrowserRouter} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <Layout>
            <Switch>
              <Route path="/checkout" exact component={Checkout}/>
              <Route path="/" exact component={BurgerBuilder}/>
              <Checkout/>
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// https://react-buger-c3d8d.firebaseio.com/
