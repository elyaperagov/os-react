import React, { useState } from "react";
import InputMask from "react-input-mask";

const PhoneInput = React.forwardRef((props, ref) => (
  <InputMask
    ref={ref}
    placeholder="Ваш телефон" 
    mask="(+7) 999 999 9999"
    onInput={props.onChange}
  ></InputMask>
));

export default PhoneInput;
