import { destroyToken } from "../../../core/services/authHandling";
import RespPhoto from "../common/ResponsivePhoto/ResponsivePhoto";
import "./EditPopUp.scss";

export interface EditPopUpProps {
  closeFunc(): void;
}

const EditPopUp: React.FC<EditPopUpProps> = ({ closeFunc }) => {
  function logOut() {
    destroyToken();
    window.location.reload();
  }


  return (
    <>
      <div
        className="absolute-wrapper"
        onClick={() => closeFunc()}
        onKeyDown={() => closeFunc()}
        role="button"
        tabIndex={0}
      >
        {" "}
      </div>
      <div className="edit-wrapper">
        <div className="top-bar">
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
        <form action="/">
          <div className="photo-flex">
            <div className="resp-photo">
              <RespPhoto url="https://i.pravatar.cc/300" />
            </div>
            <div className="input-group">
              <label htmlFor="first_name">First Name
              <input
                className="standart-input mb"
                type="text"
                name="first_name"
                id="first_name"
              /></label>
              <label htmlFor="last_name">Last Name
              <input
                className="standart-input"
                type="text"
                name="last_name"
                id="last_name"
              /></label>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="job_title">Job title
            <input
              className="standart-input mb"
              type="text"
              name="job_title"
              id="job_title"
            /></label>
            <label htmlFor='description'>Description
            <input
              className="standart-input mb"
              type="text"
              name='description'
              id='description'
            /></label>
          </div>
          <div className="h-input-group">
            <button
              onClick={() => closeFunc()}
              type="button"
              className="white-btn"
            >
              Cancel
            </button>
            <button className="blue-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPopUp;
