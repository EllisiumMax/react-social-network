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
      <div className={scss.contactsList}>
        {props.contacts.facebook ? (
          <a className={scss.contactCell} href={`${props.contacts.facebook}`}>
            <img src={fbLogo} alt="Facebook Logo" />
          </a>
        ) : null}
        {props.contacts.website ? (
          <a className={scss.contactCell} href={`${props.contacts.website}`}>
            <img src={wwwLogo} alt="Website Logo" />
          </a>
        ) : null}
        {props.contacts.vk ? (
          <a className={scss.contactCell} href={`${props.contacts.vk}`}>
            <img src={vkLogo} alt="Vkontakte Logo" />
          </a>
        ) : null}
        {props.contacts.twitter ? (
          <a className={scss.contactCell} href={`${props.contacts.twitter}`}>
            <img src={twitterLogo} alt="Twitter Logo" />
          </a>
        ) : null}
        {props.contacts.instagram ? (
          <a className={scss.contactCell} href={`${props.contacts.instagram}`}>
            <img src={instaLogo} alt="Instagramm Logo" />
          </a>
        ) : null}
        {props.contacts.youtube ? (
          <a className={scss.contactCell} href={`${props.contacts.youtube}`}>
            <img src={yTubeLogo} alt="YoutTube Logo" />
          </a>
        ) : null}
        {props.contacts.github ? (
          <a className={scss.contactCell} href={`${props.contacts.github}`}>
            <img src={gitLogo} alt="GitHub Logo" />
          </a>
        ) : null}
        {props.contacts.mainLink ? (
          <a className={scss.contactCell} href={`${props.contacts.mainLink}`}>
            <img src={mainLinkLogo} alt="Main Link Logo" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Info;
