import classNames from "classnames";
import { FormEvent, useState } from "react";

import { destroyToken } from "../../../core/services/authHandling";
import buttons from "../../style/buttons.module.scss";
import { ProfileType } from "../ProfileCard/ProfileCard";
import RespPhoto from "../common/ResponsivePhoto/ResponsivePhoto";

import styles from "./EditPopUp.module.scss";

export interface EditPopUpProps {
  profile: ProfileType;
  closeFunc(): void;
  updateFunc(requestProfile: ProfileType): Promise<void>;
}

const EditPopUp: React.FC<EditPopUpProps> = ({
  closeFunc,
  updateFunc,
  profile,
}) => {
  function logOut() {
    destroyToken();
    window.location.reload();
  }

  const [profileState, setProfileState] = useState(profile);

  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileState({
      ...profileState,
      [e.target.name]: e.target.value
    })
  }


  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    /* const account = {
      avatar: profile.avatar,
      followers: profile.followers,
      following: profile.followers,
      firstName: profileState.firstName,
      lastName:,
      jobTitle,
      description,
    }; */

    await updateFunc(profileState);
    closeFunc();
  }

  return (
    <>
      <div
        className={styles.absoluteWrapper}
        onClick={() => closeFunc()}
        onKeyDown={() => closeFunc()}
        role="button"
        tabIndex={0}
      >
        {" "}
      </div>
      <div className={styles.editWrapper}>
        <div className={styles.topBar}>
          <h1>Profile Information</h1>
          <span
            onClick={() => {
              logOut();
            }}
            className="pseudolink"
            onKeyDown={() => logOut()}
            role="button"
            tabIndex={0}
          >
            Log Out
          </span>
        </div>
        <form action="/" onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.photoFlex}>
            <div className={styles.respPhoto}>
              <RespPhoto
                url={
                  profile.avatar?.url
                    ? profile.avatar?.url
                    : "https://via.placeholder.com/88"
                }
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">
                First Name
                <input
                  className={classNames(['standart-input', styles.mb])}
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={(e) => hadleChange(e)}
                  value={profileState.firstName}
                />
              </label>
              <label htmlFor="lastName">
                Last Name
                <input
                  className="standart-input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={(e) => hadleChange(e)}
                  value={profileState.lastName}
                />
              </label>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="jobTitle">
              Job title
              <input
                className={classNames(['standart-input', styles.mb])}
                type="text"
                name="jobTitle"
                id="jobTitle"
                onChange={(e) => hadleChange(e)}
                value={profileState.jobTitle}
              />
            </label>
            <label htmlFor="description">
              Description
              <input
                className={classNames(['standart-input', styles.mb])}
                type="text"
                name="description"
                id="description"
                onChange={(e) => hadleChange(e)}
                value={profileState.description}
              />
            </label>
          </div>
          <div className={styles.hInputGroup}>
            <button
              onClick={closeFunc}
              type="button"
              className={buttons.whiteBtn}
            >
              Cancel
            </button>
            <button className={buttons.blueBtn} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPopUp;
