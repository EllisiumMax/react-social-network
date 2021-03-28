import Loader from "components/COMMON/Loader/Loader";
import React from "react";
import { Field, Form } from "react-final-form";
import scss from "./UserInfo.module.scss";

function UserInfo(props) {
  if(!props.profileInfo.fullName) return <Loader />;
  return (
    <div>
      <Form
        onSubmit={(form) => {
          form.userId = props.id;
          props.changeProfileInfo(form);
          console.log(form);
        }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div className={scss.mainWrapper}>
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
                <Field name="aboutMe" component="input" type="text" defaultValue={props.profileInfo.aboutMe}/>
              </div>
              <div>
                <label>Looking for a job?</label>
                <Field
                  name="lookingForAJob"
                  component="input"
                  type="checkbox"
                  checked={props.profileInfo.lookingForAJob ? "checked" : null}
                />
              </div>
              <div>
                <label>Describe the job you are looking for: </label>
                <Field
                  name="lookingForAJobDescription"
                  component="input"
                  type="text"
                  defaultValue={props.profileInfo.lookingForAJobDescription}
                />
              </div>

              <div className={scss.contactsWrapper}>
                <label>Contacts</label>
                <label>
                  GitHub:
                  <Field
                    name="contacts.github"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.github}
                  />
                </label>
                <label>
                  Vkontakte:
                  <Field
                    name="contacts.vk"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.vk}

                  />
                </label>
                <label>
                  Facebook:
                  <Field
                    name="contacts.facebook"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.facebook}
                  />
                </label>
                <label>
                  Instagram:
                  <Field
                    name="contacts.instagram"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.instagram}
                  />
                </label>
                <label>
                  Twitter:
                  <Field
                    name="contacts.twitter"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.twitter}
                  />
                </label>
                <label>
                  Website:
                  <Field
                    name="contacts.website"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.website}
                  />
                </label>
                <label>
                  Youtube:
                  <Field
                    name="contacts.youtube"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.youtube}
                  />
                </label>
                <label>
                  Main Link:
                  <Field
                    name="contacts.mainLink"
                    component="input"
                    type="text"
                    defaultValue={props.profileInfo.contacts.mainLink}
                  />
                </label>
                <button type="submit" disabled={submitting} className={scss.submit}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default UserInfo;
