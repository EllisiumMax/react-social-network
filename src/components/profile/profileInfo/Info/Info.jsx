import React from "react";
import scss from "./Info.module.scss";
import fbLogo from "../../../../images/Facebook_logo.svg";
import wwwLogo from "../../../../images/www.svg";
import vkLogo from "../../../../images/vk.svg";
import twitterLogo from "../../../../images/twitter.svg";
import instaLogo from "../../../../images/instagram.svg";
import yTubeLogo from "../../../../images/youtube.svg";
import gitLogo from "../../../../images/github.svg";
import mainLinkLogo from "../../../../images/mainLink.svg";

function Info(props) {
  const logosArray = [
    fbLogo,
    wwwLogo,
    vkLogo,
    twitterLogo,
    instaLogo,
    yTubeLogo,
    gitLogo,
    mainLinkLogo,
  ];

  const contacts = Object.entries(props.contacts).map((val, i) => {
    if (val[1]) {
      return (
        <a className={scss.contactCell} href={val[1]}>
          <img src={logosArray[i]} alt={val[0]} />
        </a>
      );
    }
  });
  
  return (
    <div>
      <div className={scss.job}>
        <h4>About me: {props.aboutMe}</h4>
        {props.lookingForAJob ? (
          <h4>Looking for a job: {props.lookingForAJobDescription} </h4>
        ) : (
          <h4> Not looking for a job.</h4>
        )}
      </div>
      <div className={scss.contactsList}>{contacts}</div>
    </div>
  );
}

export default Info;
