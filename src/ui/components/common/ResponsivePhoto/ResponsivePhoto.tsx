import "./ResponsivePhoto.scss";

export interface RespPhotoProps {
    url: string;
}
 
const RespPhoto = ({url}: RespPhotoProps) => {
    return ( 
        <>
        <div className="resp-photo-wrapper">
            <div className="resp-square">
                <img className="content" src={url} alt="posts grid item" />
            </div>
        </div>
        </>
     );
}
 
export default RespPhoto;