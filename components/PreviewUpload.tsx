import Image from 'next/image';
import { FC } from 'react';
import Carousel from 'better-react-carousel';

interface PreviewUploadProps {
  images: Blob[] | [];
}

export const PreviewUpload: FC<PreviewUploadProps> = ({ images }) => {
  return (
    <div>
      <div>
        <h4>Preview</h4>
      </div>
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
        <button>Upload Now</button>
      </div>
    </div>
  );
};
