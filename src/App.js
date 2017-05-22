import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import Text from './Text'
import Link from './Link'
import Ad from './Ad'
import Articles from './Articles'
import Footer from './Footer'
import './Header.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <Content />
        <Text />
        <Link />
      </div>
      <Ad />
      <Articles />
    </main>

    <Footer />
      </div>
    );
  }
}

export default App;
