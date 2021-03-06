import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Resizer from "react-image-file-resizer";
import PropTypes from "prop-types";

import * as Styled from "./style";
import Button from "../../theme/Button";
import { useAtom } from "jotai";
import { successAlertAtom } from "../../state/store";

const DropZone = ({ props, setDrop, setImage, isCard, isDeck, isDocument }) => {
  const [successAlert] = useAtom(successAlertAtom);

  const [files, setFiles] = useState([]);
  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {};
      acceptedFiles.forEach((file) => reader.readAsArrayBuffer(file));
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );

      if (isCard || isDocument) {
        setDrop(acceptedFiles[0]);
      } else if (isDeck) {
        setDrop(acceptedFiles[0]);

        acceptedFiles.forEach((file) => {
          Resizer.imageFileResizer(
            file,
            500,
            500,
            "PNG",
            100,
            0,
            (blob) => {
              setImage(blob);
            },
            "blob"
          );
        });
      }
    },
    [setDrop, setImage, isCard, isDeck, isDocument]
  );

  const {
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    maxSize: 10485760,
    multiple: false,
    accept:
      isCard || isDeck
        ? ["image/*"]
        : [
            "image/*",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          ],
  });

  const removeFile = (e, file) => {
    e.preventDefault();
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    setDrop(e.target.value === null);
  };

  const acceptedFilesItems = files.map((file) => (
    <Styled.AcceptedItem key={file.path}>
      {file.path} - {file.size} bytes
    </Styled.AcceptedItem>
  ));

  const rejectedFilesItems = fileRejections.map((file) => (
    <Styled.RejectedItem key={file.path}>
      <Styled.RejectedFileWarning>
        Rejected ~ File is not an image, or is over the 10mb limit
      </Styled.RejectedFileWarning>
      {file.path} - {file.size} bytes
    </Styled.RejectedItem>
  ));

  const thumbs = files.map((file) => (
    <Styled.Thumb key={file.name}>
      <Styled.ThumbInner>
        <Styled.Img src={file.preview} />
      </Styled.ThumbInner>
    </Styled.Thumb>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const removeOnSuccess = useCallback((file) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    setDrop(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    (file) => {
      if (successAlert) {
        removeOnSuccess();
      }
    },
    [successAlert, removeOnSuccess]
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
        {isDocument ? (
          <em>(Image, PDF or Office document files will be accepted)</em>
        ) : (
          <em>(Only image files will be accepted)</em>
        )}
      </Styled.Container>
      <Styled.Aside>
        {files.length > 0 && (
          <Styled.UploadTitle>File to be uploaded:</Styled.UploadTitle>
        )}
        {!isDocument ? (
          <Styled.ThumbContainer>{thumbs}</Styled.ThumbContainer>
        ) : null}
        <Styled.AcceptedList>{acceptedFilesItems}</Styled.AcceptedList>
        <Styled.RejectedList>{rejectedFilesItems}</Styled.RejectedList>
      </Styled.Aside>
      <Styled.RemoveButton files={files} onClick={(e) => removeFile(e)}>
        Remove File
      </Styled.RemoveButton>
    </section>
  );
};

DropZone.propTypes = {
  props: PropTypes.object,
  setDrop: PropTypes.func.isRequired,
  setImage: PropTypes.func,
  isCard: PropTypes.string,
  isDeck: PropTypes.string,
  isDocument: PropTypes.string,
};

export default DropZone;
