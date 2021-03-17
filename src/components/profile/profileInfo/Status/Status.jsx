import React, { useState } from "react";
import scss from "./Status.module.scss";
import editImg from "../../../../images/edit.svg";

function Status(props) {
  let [editMode, modifyEditMode] = useState(
    props.loggedUserID === props.targetId ? true : false
  );
  let [tempText, editTempText] = useState(props.status);
  let [editActive, modifyEditActive] = useState(false);

  function statusChangeOnEnter(e) {
    if (e.keyCode === 13) {
      props.setStatusRequest(props.status, tempText);
      modifyEditActive(false);
    }
  }

  if (editMode) {
    return (
      <div>
        {editActive ? (
          <input
            className={scss.input}
            maxLength={300}
            value={tempText}
            onChange={(e) => editTempText(e.target.value)}
            autoFocus={true}
            onBlur={() => {
              props.setStatusRequest(props.status, tempText);
              modifyEditActive(false);
            }}
            onKeyDown={(e) => statusChangeOnEnter(e)}
          ></input>
        ) : (
          <div className={scss.wrapper}>
            <h3 className={`${scss.statusText} ${scss.editable}`}>
              {props.status || "No status"}
            </h3>
            <img
              className={scss.edit}
              src={editImg}
              onClick={() => modifyEditActive(true)}
            />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={scss.wrapper}>
        <h3 className={scss.statusText}>{props.status ?? "No status"}</h3>
      </div>
    );
  }
}

export default Status;
