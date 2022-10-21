import {
  ChangeEvent,
  DragEvent,
  DragEventHandler,
  useRef,
  useState,
} from 'react';
import { PreviewUpload } from '.';

// drag drop file component
export const Upload = (): JSX.Element => {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  const [ImagePrevious, setImagePrevious] = useState<Blob[] | []>([]);
  // ref
  const inputRef = useRef(null);

  const handleFiles = (e: FileList): void => {
    if (!e[0].name.match(/\.(jpg|jpeg|png)$/)) {
      alert('Invalid file type, only png, jpeg, jpg');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(e[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImagePrevious([...ImagePrevious, e.target?.result as unknown as Blob]);
      console.log(ImagePrevious);
    };
  };

  // handle drag events
  const handleDrag = (e: DragEvent<HTMLFormElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = (e: DragEvent<HTMLFormElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.files?.[0]) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <form
        id="form-file-upload"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? 'drag-active' : ''}
        >
          <div>
            <p>Drag and drop your file here</p>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={
              handleDrag as unknown as DragEventHandler<HTMLDivElement>
            }
            onDragLeave={
              handleDrag as unknown as DragEventHandler<HTMLDivElement>
            }
            onDragOver={
              handleDrag as unknown as DragEventHandler<HTMLDivElement>
            }
            onDrop={handleDrop as unknown as DragEventHandler<HTMLDivElement>}
          ></div>
        )}
      </form>
      {ImagePrevious.length ? (
        <PreviewUpload images={ImagePrevious} />
      ) : (
        <div></div>
      )}
    </div>
  );
};
