import React from 'react';

const FileInput = props => {
  return (
    <div className={props.className}>
      <input
        onChange={e => {
          props.handleFileChange(e.target.files[0]);
        }}
        type="file"
        accept={props.accept}
      />
    </div>
  );
};

export default FileInput;
