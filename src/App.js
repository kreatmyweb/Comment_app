// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [Comment, setComment] = useState('');
  const onChangeHandler =(e) => {
    setComment(e.target.value)
  }
  const [comments, setComments] = useState([]);
  const onClickHandler = () => {
    setComments((comments) => [...comments, Comment])
  };

  return (
    <div className="main-container">
      {comments.map((text) => {
        <div className="comment-container">{text}</div>;
      })}
      
      <div className='comment-flexBox'>
        <h3 className='comment-text'>Comment</h3>
        <textarea value={Comment} onChange={onChangeHandler} className='input-box'/>
        <button onClick={onClickHandler} className='comment-button'>Submit</button>
      </div>
    </div>
  );
}

export default App;
