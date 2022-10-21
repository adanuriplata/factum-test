// import React, { useState } from 'react';

// export const Upload = (): JSX.Element => {
//   // drag state
//   const [dragActive, setDragActive] = useState(false);
//   // ref
//   const inputRef = React.useRef(null);

//   const handleFiles = (e) => console.log(e);

//   // handle drag events
//   const handleDrag = function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === 'dragenter' || e.type === 'dragover') {
//       setDragActive(true);
//     } else if (e.type === 'dragleave') {
//       setDragActive(false);
//     }
//   };

//   // triggers when file is dropped
//   const handleDrop = function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       handleFiles(e.dataTransfer.files);
//     }
//   };

//   // triggers when file is selected with click
//   const handleChange = function (e) {
//     e.preventDefault();
//     if (e.target.files && e.target.files[0]) {
//       handleFiles(e.target.files);
//     }
//   };

//   // triggers the input when the button is clicked
//   const onButtonClick = () => {
//     inputRef.current.click();
//   };

//   return (
//     <form
//       id="form-file-upload"
//       onDragEnter={handleDrag}
//       onSubmit={(e) => e.preventDefault()}
//     >
//       <input
//         ref={inputRef}
//         type="file"
//         id="input-file-upload"
//         multiple
//         onChange={handleChange}
//       />
//       <label
//         id="label-file-upload"
//         htmlFor="input-file-upload"
//         className={dragActive ? 'drag-active' : ''}
//       >
//         <div>
//           <p>Drag and drop your file here or</p>
//           <button className="upload-button" onClick={onButtonClick}>
//             Upload a file
//           </button>
//         </div>
//       </label>
//       {dragActive && (
//         <div
//           id="drag-file-element"
//           onDragEnter={handleDrag}
//           onDragLeave={handleDrag}
//           onDragOver={handleDrag}
//           onDrop={handleDrop}
//         ></div>
//       )}
//     </form>
//   );
// };
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
export const Upload = (): JSX.Element => {
  const [ImagePrevious, setImagePrevious] = useState<
    string | ArrayBuffer | null | never | any
  >([]);
  const changeImage = (e: ChangeEvent<HTMLInputElement>): false | undefined => {
    // const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    // if (!allowedExtensions.exec(e.target.files[0])) {
    //   alert('Invalid file type');
    //   return false;
    // }

    if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)) {
      // this.setState({ invalidImage: 'Please select valid image.' });
      alert('Invalid file type');
      return false;
    }

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImagePrevious([...ImagePrevious, e.target?.result]);
      console.log(ImagePrevious);
    };
  };

  return (
    <div>
      <div>
        <input
          type="file"
          accept="image/*"
          multiple={false}
          onChange={(e) => {
            changeImage(e);
          }}
        />
      </div>
      <div>
        {ImagePrevious.map((e) => (
          <Image key={e} height="100" width="200" src={e} alt="" />
        ))}
      </div>
    </div>
  );
};
