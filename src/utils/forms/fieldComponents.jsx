import React from "react";
import scss from "./fieldComponents.module.scss";

export const TextArea = ({ input, meta }) => (
  <div>
    <div className={scss.inputWrapper}>
      <textarea {...input} placeholder="Please enter your text here" />
      {meta.error && meta.touched && (
          <span className={scss.errorMessage}> &#9888; {meta.error}</span>
      )}
    </div>
  </div>
);

export const InputEmail = ({ input, meta }) => (
  <div>
    <div className={scss.inputWrapper}>
      <input {...input} type="email" placeholder="Email" />
      {meta.error && meta.touched && (
          <span className={scss.errorMessage}> &#9888; {meta.error}</span>
      )}
    </div>
  </div>
);

export const InputPassword = ({ input, meta }) => (
  <div>
    <div className={scss.inputWrapper}>
      <input {...input} type="password" placeholder="Password" />
      {meta.error && meta.touched && (
          <span className={scss.errorMessage}> &#9888; {meta.error}</span>
      )}
    </div>
  </div>
);
