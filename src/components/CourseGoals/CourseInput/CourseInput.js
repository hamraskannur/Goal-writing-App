import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valied,setvalied] = useState(1)
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setvalied(1)
    } 
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setvalied(0)
      console.log(valied);
    } else {
      props.onAddGoal(enteredValue);

    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label  >Course Goal</label>
        <input style={{background:valied === 0 ? "red": "#ccc"}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
