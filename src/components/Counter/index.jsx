//props: https://reactjs.org/docs/components-and-props.html
import React from "react";

const Counter = (props) => {
  const increaseCount = () => {
    props.changeCount(props.count + 1);
  };
  const decreaseCount = () => {
    props.changeCount(props.count - 1);
  };
  // event: https://developer.mozilla.org/en-US/docs/Web/API/Event
  // synthetic event: https://reactjs.org/docs/events.html
  const handleInput = (e) => {
    props.changeCount(Number(e.target.value));
  };

  // events: https://www.w3schools.com/react/react_events.asp
  // input: https://www.w3schools.com/tags/tag_input.asp
  return (
    <div>
      <input
        type="number"
        placeholder="count"
        value={props.count}
        onChange={handleInput}
      />
      <button type="button" onClick={increaseCount}>
        increment
      </button>
      <button type="button" onClick={decreaseCount}>
        decrement
      </button>
    </div>
  );
};

export default Counter;
