import buttons from "../../style/buttons.module.scss";

import styles from "./styles.module.scss";

const NewPostPopUp: React.FC = () => {
  return (
    <>
      <div className={styles.grayOverlay} />
      <div className={styles.wrapper}>
        <div id="photo-area" className={styles.photoWrapper} />

        <form action="/" className={styles.form}>
            <label htmlFor="description">
              <textarea
                name="description"
                id="description"
                cols={30}
                rows={30}
            placeholder="Description..."
              />
            </label>
            <div className={styles.buttons}>
                <button type='button' className={buttons.whiteBtn}>Cancel</button>
                <button type='submit' className={buttons.blueBtn}>Submit</button>
            </div>
        </form>
      </div>
    </>
  );
};

export default NewPostPopUp;
