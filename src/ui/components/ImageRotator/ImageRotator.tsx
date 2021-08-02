import RespPhoto from "../common/ResponsivePhoto/ResponsivePhoto";
import "./ImageRotator.scss";

export interface ImageRotatorProps {
  url: string;
}

const ImageRotator = ({ url }: ImageRotatorProps) => {
  return <div className="wrapper">
      <RespPhoto url={url} />
  </div>;
};

export default ImageRotator;
