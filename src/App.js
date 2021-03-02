import React from 'react';
import logo from './images/cat-logo.gif'
import './styles/styles.scss';

const tags = ['serious', 'grumpy', 'sleeping', 'white', 'happy', 'old', 'fat', 'cute', 'fail', 'stupid', 'funny', 'gif']

function CatCard(props) {
  return (
    <section className="card-cat card">
    <img className="cat-image" alt="cat" src={"https://cataas.com/cat/" + tags[props.tagNum]}/>
    <div className="cat-tag flex justify-center align-center">{tags[props.tagNum]}</div>
  </section> 

  );
}


function App() {
  return (
    <div className="app main-container app-container">
      <header className="main-header header-layout" id="nav">
        <img className="logo" alt="logo"src={logo} />
        <h1>My cat website</h1>
        <p>We’re all cat lovers. That’s why we’re here. But have you ever stopped to wonder why we find cats so incredible loveable?</p>
        <p>With Valentine’s Day just around the corner, it seemed the perfect time to explore our fascination with our self-domesticated feline friends.</p>
      </header>
      <main className="home cards-container card-grid">
        {tags.map((value, index) => {
          return <CatCard tagNum={index} />
        })}
      </main>
      <footer className="full main-container">
        <small className="container">all rights reserved to cats @2019</small>
      </footer>
    </div>
  );
}

export default App;