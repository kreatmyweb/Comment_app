import React, { useState } from "react";
import { useRef } from "react";
import './commentForm.css'

const CommentForm = () => {
      const [isToggled, setIsToggled] = useState(false);
      const toggle = () => {
        setIsToggled(!isToggled);
      };
      const handleChoose = (e) => {
        toggle();
        e.target.reset();
      };
  // Comment form
  const form = useRef();
  const sendMesseage = (e) => {
    e.preventDefault();
    e.target.reset()
  };
  return (
    <div className="main__container">
      <div className="subject-chooser__selected">
        <button className="toggle" onClick={toggle}>Click</button>
        {isToggled && (
          <div className="subject-chooser__options">
            <select>
              <option className="service__provided" value="" onClick={handleChoose}>Select service provided</option>
              <option value="Subject 1" onClick={handleChoose}>Oxygen Setup/Delivery</option>
              <option value="Subject 2" onClick={handleChoose}>Bipap/CPAP/Ventilator Setup</option>
              <option value="Subject 3" onClick={handleChoose}>Supply</option>
              <option value="Subject 3" onClick={handleChoose}>Phone Services</option>
            </select>
          </div>
        )}
      </div>
      {/* comment */}
      <div className="comment-container">
        <form className="CommentForm" ref={form} onSubmit={sendMesseage}>
          <label className="comment__titile">Leave a comment:</label>
          <textarea className="comment-text" onChange={sendMesseage} />
          <button className="comment-button" type="submit">{" "}Submit{" "}</button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
