import Image from 'next/image';
import { FC } from 'react';
import Carousel from 'better-react-carousel';

interface PreviewUploadProps {
  images: Blob[] | [];
  handleClick?: () => void;
}

export const PreviewUpload: FC<PreviewUploadProps> = ({
  images,
  handleClick,
}) => {
  return (
    <div>
      <div>{handleClick ? <h4>Preview</h4> : <p>🗃 Stored</p>}</div>
      <Carousel mobileBreakpoint={300} cols={3} rows={1} gap={3} loop>
        {images.map((e, i) => (
          <Carousel.Item key={i}>
            <Image
              height="85"
              width="100"
              src={e as unknown as string}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        {handleClick && (
          <button className="upload-button" onClick={handleClick}>
            Upload Now 👆
          </button>
        )}
      </div>
    </div>
  );
};
