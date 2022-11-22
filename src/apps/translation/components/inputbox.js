import React from "react";
import PropTypes from "prop-types";

const InputBox = ({ handleSubmission, boxValue, setBoxValue }) =>  (
    <form onSubmit={handleSubmission}>
      {/* post  action="" method="" */}
      <label>
        Input your text:{" "}
        <input
          type="text"
          onChange={
            // monitor the change
            (e) => setBoxValue(e.target.value)
          }
          value={boxValue}
        />
      </label>
    </form>
  );

InputBox.propTypes = {
  boxValue: PropTypes.string,
  setBoxValue: PropTypes.func,
  handleSubmission: PropTypes.func,
};

export default InputBox;
