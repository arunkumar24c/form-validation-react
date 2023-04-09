import React, { useState } from "react";
import ".././formInput/formInput.css";




const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;
// handle focus
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <input
        {...inputProps}
        onChange={onChange}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="errorMessage">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
