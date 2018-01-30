import React, { Component } from 'react';
// import { render } from 'react-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';

// const template = Handlebars.compile(source);
class App extends Component {
  render () {
    return (
      <section >
        <Header />
        <Footer />
      </section>
    )
  }
}

export default App;
