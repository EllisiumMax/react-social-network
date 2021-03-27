import React from "react";
import { Field, Form } from "react-final-form";
import scss from "./UserInfo.module.scss";

function UserInfo(props) {
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
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label>About me: </label>
                <Field name="aboutMe" component="input" type="text" />
              </div>
              <div>
                <label>Looking for a job?</label>
                <Field
                  name="lookingForAJob"
                  component="input"
                  type="checkbox"
                />
              </div>
              <div>
                <label>Describe the job you are looking for: </label>
                <Field
                  name="lookingForAJobDescription"
                  component="input"
                  type="text"
                  placeholder="Job description"
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
                    placeholder="github"
                  />
                </label>
                <label>
                  Vkontakte:
                  <Field
                    name="contacts.vk"
                    component="input"
                    type="text"
                    placeholder="vk"
                  />
                </label>
                <label>
                  Facebook:
                  <Field
                    name="contacts.facebook"
                    component="input"
                    type="text"
                    placeholder="facebook"
                  />
                </label>
                <label>
                  Instagram:
                  <Field
                    name="contacts.instagram"
                    component="input"
                    type="text"
                    placeholder="instagram"
                  />
                </label>
                <label>
                  Twitter:
                  <Field
                    name="contacts.twitter"
                    component="input"
                    type="text"
                    placeholder="twitter"
                  />
                </label>
                <label>
                  Website:
                  <Field
                    name="contacts.website"
                    component="input"
                    type="text"
                    placeholder="website"
                  />
                </label>
                <label>
                  Youtube:
                  <Field
                    name="contacts.youtube"
                    component="input"
                    type="text"
                    placeholder="youtube"
                  />
                </label>
                <label>
                  Main Link:
                  <Field
                    name="contacts.fullmainLinkName"
                    component="input"
                    type="text"
                    placeholder="mainLink"
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
