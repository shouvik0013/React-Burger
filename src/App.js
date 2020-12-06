import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          {/* Layout will contain actual components*/}
          <BurgerBuilder/> {/*it is a container component*/}
        </Layout>
      </div>
    );
  }
}

export default App;
