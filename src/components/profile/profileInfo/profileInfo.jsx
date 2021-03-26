import scss from "./ProfileInfo.module.scss";
import React from "react";
import Loader from "components/COMMON/Loader/Loader";
import Status from "./Status/Status";
import Photo from "./Photo/Photo";
import Info from "./Info/Info";

function ProfileInfo(props) {
  if (!props.userId) {
    return <Loader />;
  }

  return (
    <div className={scss.mainWrapper}>
      <Photo
        imgLarge={props.photos.large}
        imgSmall={props.photos.small}
        editMode={props.editMode}
        uploadPhoto={props.uploadPhoto}
      />
      <div className={scss.infoWrapper}>
        <div className={scss.userName}>
          <h1>{props.fullName}</h1>
          <Status
            status={props.status}
            setStatusRequest={props.setStatusRequest}
            editMode={props.editMode}
          />
        </div>
        <Info contacts={props.contacts} />
      </div>
    </div>
  );
}

export default ProfileInfo;
