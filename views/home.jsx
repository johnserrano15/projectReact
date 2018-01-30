import React, { Component } from 'react';
import Layout from './layouts/default';

class Home extends Component {
  render() {
    return (
      <Layout title="Homepage">
        <h1>Hola mundo</h1>
        <section id="app"></section>
      </Layout>
    )
  }
}

export default Home;
