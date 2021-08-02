import RespPhoto from "../common/ResponsivePhoto/ResponsivePhoto";
import { PostProps } from "../Post/Post";
import "./ProfilePhotoGrid.scss";

export interface ProfilePhotoGridProps {
    postsProp: PostProps[];
}
 
const ProfilePhotoGrid= ({postsProp}: ProfilePhotoGridProps) => {
    let posts = postsProp.map(item => item.props);
    return ( 
        <>
        <div className="photo-grid">
            {posts.map(item => <RespPhoto url={item.imageUrl[0]} />)}
        </div>
        </>
     );
}
 
export default ProfilePhotoGrid;