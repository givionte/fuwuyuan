import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import * as Styled from "./style";
import Button from "../../../../theme/Button";

export default function DropZone({ props, drop, setDrop }) {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback(
    acceptedFiles => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        console.log(acceptedFiles);
      };

      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );

      setDrop(acceptedFiles[0]);
    },
    [setDrop]
  );
  const {
    rejectedFiles,
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open
  } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    maxSize: 10485760,
    multiple: false,
    accept: ["image/*"]
  });
  console.log(acceptedFiles);
  console.log(drop);

  const acceptedFilesItems = acceptedFiles.map(file => (
    <Styled.AcceptedItem key={file.path}>
      {file.path} - {file.size} bytes
    </Styled.AcceptedItem>
  ));

  const rejectedFilesItems = rejectedFiles.map(file => (
    <Styled.RejectedItem key={file.path}>
      <Styled.RejectedFileWarning>
        Rejected ~ File is not an image, or is over the 10mb limit
      </Styled.RejectedFileWarning>
      {file.path} - {file.size} bytes
    </Styled.RejectedItem>
  ));

  const thumbs = files.map(file => (
    <Styled.Thumb key={file.name}>
      <Styled.ThumbInner>
        <Styled.Img src={file.preview} />
      </Styled.ThumbInner>
    </Styled.Thumb>
  ));

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section>
      <Styled.Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop a file here, or click below to select a file</p>
        <Button type="button" onClick={open}>
          Select File
        </Button>
        <em>(Only image files will be accepted)</em>
      </Styled.Container>
      <Styled.Aside>
        {acceptedFilesItems.length > 0 && (
          <Styled.UploadTitle>File to be uploaded:</Styled.UploadTitle>
        )}
        <Styled.ThumbContainer>{thumbs}</Styled.ThumbContainer>
        <Styled.AcceptedList>{acceptedFilesItems}</Styled.AcceptedList>
        <Styled.RejectedList>{rejectedFilesItems}</Styled.RejectedList>
      </Styled.Aside>
    </section>
  );
}