import { PostProps } from "../Post/Post";
import RespPhoto from "../common/ResponsivePhoto/ResponsivePhoto";

import styles from "./ProfilePhotoGrid.module.scss";

export interface ProfilePhotoGridProps {
    postsProp: PostProps[];
}
 
const ProfilePhotoGrid: React.FC<ProfilePhotoGridProps> = ({postsProp}) => {
    const posts = postsProp.map(item => item.post);
    return ( 
        <>
        <div className={styles.photoGrid}>
            {posts.map(item => <RespPhoto key={item.id} url={item.imageUrl[0]} />)}
        </div>
        </>
     );
}
 
export default ProfilePhotoGrid;