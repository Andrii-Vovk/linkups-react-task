export interface ImageRotatorProps {
    url: string;
}
 
const ImageRotator = ({ url }: ImageRotatorProps) => {
    return ( 
        <img src={url} alt="post" />
     );
}
 
export default ImageRotator;