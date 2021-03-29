import React from "react";
import userWithoutPhoto from "../../../../images/unknown-user-big.svg";
import upploadImg from "../../../../images/upload.svg";
import scss from "./Photo.module.scss";

function Photo(props) {
  return (
    <div className={scss.photoContainer}>
      <img
        src={props.imgLarge || props.imgSmall || userWithoutPhoto}
        alt="User profile"
        className={scss.userPhoto}
      />
      {props.editMode ? (
        <label
          className={scss.loadPhoto}
          title="Uppload new photo"
          onChange={(e) => {
            console.log(e.target);
            props.uploadPhoto(e.target);
          }}
        >
          <input type="file" className={scss.hiddenUpload} />
          <img
            src={upploadImg}
            alt="uppload"
            className={scss.upploadIco}
          />
        </label>
      ) : null}
    </div>
  );
}

export default Photo;
