import styles from "./ResponsivePhoto.module.scss";

export interface RespPhotoProps {
  url: string;
  onClick?(): void;
}

const RespPhoto: React.FC<RespPhotoProps> = ({ url, onClick }) => {
  return (
    <>
      <div className={styles.respPhotoWrapper}>
        <div
          className={styles.respSquare}
          onClick={onClick}
          onKeyDown={onClick}
          role="button"
          tabIndex={0}
        >
          <img className={styles.content} src={url} alt="posts grid item" />
        </div>
      </div>
    </>
  );
};

export default RespPhoto;
