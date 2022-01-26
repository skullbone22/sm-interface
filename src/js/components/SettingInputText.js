import React from "react";

const SettingInputText = (props) => {
  return (
    <label className="field field_v1">
      <input
        className="field__input"
        placeholder={props.placeholder}
        onChange={props.changeValue}
        value={props.value}
      />
      <span className="field__label-wrap">
        <span className="field__label">{props.title}</span>
      </span>
    </label>
  );
};

export default SettingInputText;
