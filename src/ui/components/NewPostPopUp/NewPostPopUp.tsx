/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AwsS3 from "@uppy/aws-s3";
import Uppy from "@uppy/core";
import { DragDrop } from "@uppy/react";
import { useState } from "react";

import buttons from "../../style/buttons.module.scss";

import styles from "./styles.module.scss";

import "@uppy/core/dist/style.css";
import "@uppy/drag-drop/dist/style.css";

interface PopUpProps {
  closeFunc(): void;
}

export interface PhotoAttributes {
  type: string;
  filename: string;
  size: string;
  id: string;
}

export interface PostAttributes {
  photoAttributes: PhotoAttributes[];
  description: string;
}

const NewPostPopUp: React.FC<PopUpProps> = ({ closeFunc }) => {
  const [postAttributes, setPostAttributes] = useState<PostAttributes | null>(
    null
  );

  const uppy = Uppy<Uppy.StrictTypes>({
    meta: { type: "[photo]" },
    restrictions: { maxNumberOfFiles: 5 },
    autoProceed: true,
  });

  uppy.use(AwsS3, {
    companionUrl: "https://linkstagram-api.ga/",
  });

  uppy.on("complete", (result) => {
    const photoAttributes = result.successful.map((item) => ({
      id: item.id,
      size: item.size,
      filename: item.name,
      type: item.type,
    }));
    console.log(result);

  });

  return (
    <>
      <button
        className={styles.grayOverlay}
        onClick={closeFunc}
        type="button"
      />
      <div className={styles.wrapper}>
        <div id="photo-area" className={styles.photoWrapper}>
          <DragDrop
            uppy={uppy}
            locale={{
              strings: {
                // Text to show on the droppable area.
                // `%{browse}` is replaced with a link that opens the system file selection dialog.
                dropHereOr: "Drop here or %{browse}",
                // Used as the label for the link that opens the system file selection dialog.
                browse: "browse",
              },
            }}
          />
        </div>

        <form action="/" className={styles.form}>
          <label htmlFor="description">
            Description
            <textarea
              name="description"
              id="description"
              placeholder="Description..."
              className={styles.textarea}
            />
          </label>
          <div className={styles.buttons}>
            <button
              type="button"
              className={buttons.whiteBtn}
              onClick={closeFunc}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={buttons.blueBtn}
              onClick={closeFunc}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPostPopUp;
