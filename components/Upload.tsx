import {
  ChangeEvent,
  DragEvent,
  DragEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { PreviewUpload } from '.';

// drag drop file component
export const Upload = (): JSX.Element => {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  const [ImagePreview, setImagePreview] = useState<Blob[] | []>([]);
  const [savedImages, setSavedImages] = useState<Blob[] | []>([]);
  const [isLocalStorage, setIsLocalStorage] = useState<boolean>(false);

  useEffect(() => {
    setIsLocalStorage(localStorage.getItem('images') as unknown as boolean);
  }, []);

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
      setImagePreview([...ImagePreview, e.target?.result as unknown as Blob]);
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

  const saveimages = (): void => {
    const toUpload = savedImages.concat(ImagePreview as []);
    localStorage.setItem('images', JSON.stringify(toUpload));
    setImagePreview([]);
    viewImages();
  };

  const viewImages = (): void => {
    const storedNames = JSON.parse(localStorage.getItem('images') as string);
    setSavedImages(storedNames);
  };

  return (
    <div>
      <div style={{ paddingBottom: '10px' }}>
        {isLocalStorage && (
          <button className="upload-button" onClick={viewImages}>
            View Saved Images
          </button>
        )}
        {!!savedImages.length && <PreviewUpload images={savedImages} />}
      </div>
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
        {ImagePreview.length ? (
          <PreviewUpload images={ImagePreview} handleClick={saveimages} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
