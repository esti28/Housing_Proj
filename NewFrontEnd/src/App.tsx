import React from 'react';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
// import { Counter } from './redux-example/counter/Counter';
import Home from './components/Home';
import PostForm from './components/PostForm';
import PostForm2 from './components/PostForm2';
import PostForm5 from './components/PostForm5';
// import ImagesUploader from './components/ImagesUploaderModule';
import OtherOptions from './components/OtherOptionsModule';

function App() {
  return (
    <div className="App">
      <OtherOptions />
      <NavBar />
      <Filter />
      <Home />
      <PostForm />
      <PostForm2 />
      <PostForm5 />
    </div>
  );
}

export default App;
