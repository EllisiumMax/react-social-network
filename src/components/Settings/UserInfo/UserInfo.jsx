import Loader from "components/COMMON/Loader/Loader";
import React from "react";
import { Field, Form } from "react-final-form";
import scss from "./UserInfo.module.scss";
import loading from "../../../images/puff.svg";

function UserInfo(props) {
  if (!props.profileInfo.fullName) return <Loader />;
  return (
    <div>
      <img
        src={loading}
        className={scss.loading}
        alt="request is loading"
        style={{ display: "none" }}
      />
      <Form
        onSubmit={(form) => {
          form.userId = props.id;
          props.changeProfileInfo(form);
          console.log(form);
        }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div className={scss.mainWrapper}>
              <div className={`${scss.sectionContainer} ${scss.personalInfo}`}>
                <h4 className={scss.sectionHeader}>Personal Info</h4>
                <div>
                  <label>Full name: </label>
                  <Field
                    name="fullName"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.fullName}
                  />
                </div>
                <div>
                  <label>About me: </label>
                  <Field
                    name="aboutMe"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.aboutMe}
                  />
                </div>
              </div>
              <div className={`${scss.sectionContainer} ${scss.jobInfo}`}>
                <h4 className={scss.sectionHeader}>Job Information</h4>
                <div>
                  <label>Looking for a job?</label>
                  <Field
                    name="lookingForAJob"
                    component="input"
                    type="checkbox"
                    defaultValue={props.profileInfo.lookingForAJob}
                  />
                </div>
                <div className={scss.job}>
                  <label>Describe the job you are looking for: </label>
                  <Field
                    name="lookingForAJobDescription"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.lookingForAJobDescription}
                  />
                </div>
              </div>

              <div className={`${scss.sectionContainer} ${scss.contactsInfo}`}>
                <h4 className={scss.sectionHeader}>Contacts</h4>
                <div>
                  <label>GitHub:</label>
                  <Field
                    name="contacts.github"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.github}
                  />
                </div>
                <div>
                  <label>Vkontakte:</label>
                  <Field
                    name="contacts.vk"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.vk}
                  />
                </div>

                <div>
                  <label>Facebook:</label>
                  <Field
                    name="contacts.facebook"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.facebook}
                  />
                </div>

                <div>
                  <label>Instagram:</label>
                  <Field
                    name="contacts.instagram"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.instagram}
                  />
                </div>

                <div>
                  <label>Twitter:</label>
                  <Field
                    name="contacts.twitter"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.twitter}
                  />
                </div>

                <div>
                  <label>Website:</label>
                  <Field
                    name="contacts.website"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.website}
                  />
                </div>

                <div>
                  <label>Youtube:</label>
                  <Field
                    name="contacts.youtube"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.youtube}
                  />
                </div>
                <div>
                  <label>Main Link:</label>
                  <Field
                    name="contacts.mainLink"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.mainLink}
                  />
                </div>
              </div>

              {props.isFetching ? (
                <img
                  src={loading}
                  className={scss.loading}
                  alt="request is loading"
                />
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className={scss.submit}
                >
                  Submit
                </button>
              )}
              {props.sentSucessfully ? (
                <div className={`${scss.responseResult} ${scss.sucess}`}>
                  Profile info has been updated
                </div>
              ) : null}
              {props.messages.length && props.messages.length >= 1 ? (
                <div className={`${scss.responseResult} ${scss.error}`}>
                  Error: {props.messages}
                </div>
              ) : null}
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default UserInfo;
