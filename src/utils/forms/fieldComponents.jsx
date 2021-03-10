import React from "react";
import scss from "./fieldComponents.module.scss";

export const TextArea = ({ input, meta }) => (
  <div>
    <div className={scss.errorWrapper}>
      <textarea {...input} placeholder="Please enter your text here" />
      {meta.error && meta.touched && (
        <span className={scss.error}>{meta.error}</span>
      )}
    </div>
  </div>
);
