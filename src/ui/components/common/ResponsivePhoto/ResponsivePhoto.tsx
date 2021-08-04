import styles from "./ResponsivePhoto.module.scss";

export interface RespPhotoProps {
    url: string;
}
 
const RespPhoto: React.FC<RespPhotoProps> = ({url}) => {
    return ( 
        <>
        <div className="resp-photo-wrapper">
            <div className={styles.respSquare}>
                <img className={styles.content} src={url} alt="posts grid item" />
            </div>
        </div>
        </>
     );
}
 
export default RespPhoto;