import React from "react";
import loader from "../../../images/loader.svg";
import scss from "./Loader.module.scss";

function Loader(props) {
  return (
<div className={scss.loaderWrapper}>
      <img className={scss.loader} src={loader} alt="LOADING..." />
    </div>
  );
}

export default Loader;
