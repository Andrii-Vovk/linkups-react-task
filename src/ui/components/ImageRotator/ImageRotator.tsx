import RespPhoto from "../common/ResponsivePhoto/ResponsivePhoto";
import "./ImageRotator.scss";

export interface ImageRotatorProps {
  url: string;
}

const ImageRotator: React.FC<ImageRotatorProps> = ({ url }) => {
  return <div className="wrapper">
      <RespPhoto url={url} />
  </div>;
};

export default ImageRotator;
