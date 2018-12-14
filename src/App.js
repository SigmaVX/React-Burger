import React, { Component } from 'react';
import Layout from "./containers/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;

// https://react-buger-c3d8d.firebaseio.com/
