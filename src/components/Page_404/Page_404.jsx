import React from "react";
import scss from "./Page_404.module.scss";
import notFound from "../../images/404.svg";

function Page404() {
  return (
    <div className={scss.wrapper}>
      <img className={scss.notFoundIMG} src={notFound} alt="Page not found" />
    </div>
  );
}

export default Page404;
