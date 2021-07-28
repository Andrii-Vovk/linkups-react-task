import "./ImageRotator.scss";

export interface ImageRotatorProps {
    url: string;
}
 
const ImageRotator = ({ url }: ImageRotatorProps) => {
    return ( 
        <div className="square-container">
            <div className="square-content">
                <img src={url} alt="Post" />
            </div>
        </div>
     );
}
 
export default ImageRotator;