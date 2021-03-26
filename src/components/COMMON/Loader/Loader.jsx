import React from "react";
import loader from "../../../images/loader.svg";
import scss from "./Loader.module.scss";

function Loader({fullscreen = false}) {
  return (
<div className={scss.loaderWrapper}>
      <img className={fullscreen ? scss.fullScreenLoader : scss.loader} src={loader} alt="LOADING..." />
    </div>
  );
}

export default Loader;
