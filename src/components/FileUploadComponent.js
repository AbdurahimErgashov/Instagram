import React, { useState } from 'react';
// import './css/fileUpload.css';
import AppCom from '../components/comment/App/AppComent'

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [folders, setFolders] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newFileObject = {
        name: selectedFile.name,
        file: selectedFile,
        link: null,
      };
      setUploadedFiles([...uploadedFiles, newFileObject]);
      setSelectedFile(null);
    }
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  const handleShow = (file) => {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  };

  const handleDelete = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  const handleGenerateLink = (file, index) => {
    const url = URL.createObjectURL(file);

    const updatedFiles = [...uploadedFiles];
    updatedFiles[index].link = url;
    setUploadedFiles(updatedFiles);
  };

  const handleCreateFolder = () => {
    const folderName = prompt('Enter folder name:');
    if (folderName) {
      const newFolder = {
        name: folderName,
        files: [],
      };
      setFolders([...folders, newFolder]);
    }
  };

  const handleUploadToFolder = () => {
    const fileName = prompt('Enter file name:');
    if (fileName) {
      const fileObjectIndex = uploadedFiles.findIndex(fileObj => fileObj.name === fileName);

      if (fileObjectIndex !== -1) {
        const selectedFileObject = uploadedFiles[fileObjectIndex];

        const folderName = prompt('Enter folder name to move the file:');
        if (folderName) {
          const folderIndex = folders.findIndex(folder => folder.name === folderName);
          if (folderIndex !== -1) {
            const updatedFolders = [...folders];
            updatedFolders[folderIndex].files.push(selectedFileObject);
            setFolders(updatedFolders);

            const updatedFiles = [...uploadedFiles];
            updatedFiles.splice(fileObjectIndex, 1);
            setUploadedFiles(updatedFiles);
          } else {
            alert('Folder not found.');
          }
        }
      } else {
        alert('File not found in the uploaded files.');
      }
    }
  };

  const handleDeleteFromFolder = (folderIndex, fileIndex) => {
    const updatedFolders = [...folders];
    updatedFolders[folderIndex].files.splice(fileIndex, 1);
    setFolders(updatedFolders);
  };

  const handleDeleteFolder = (folderIndex) => {
    const updatedFolders = [...folders];
    updatedFolders.splice(folderIndex, 1);
    setFolders(updatedFolders);
  };

  return (
    <div className="body-upload">
      {/* <div className="upload">
        <h2>File Upload</h2>
        <input className="Uploadchoose" type="file" onChange={handleFileChange} />
        <button className="btn-upload" onClick={handleUpload}>
          Upload
        </button>

        {uploadedFiles.length > 0 && (
          <div className="uploaded">
            <h3>Uploaded Files:</h3>
            <div>
              {uploadedFiles.map((fileObject, index) => (
                <div key={index}>
                  <h3>
                    <i className='fa-solid fa-file ikon'></i>
                    {fileObject.name}
                  </h3>
                  <button className="btn-upload" onClick={() => handleDownload(fileObject.file)}>
                    Download
                  </button>
                  <button className="btn-upload" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                  <button className="btn-upload" onClick={() => handleShow(fileObject.file)}>
                    Show
                  </button>
                  <button className="btn-upload" onClick={() => handleGenerateLink(fileObject.file, index)}>
                    Link
                  </button>
                  {fileObject.link && (
                    <p>
                      Link: <a href={fileObject.link} target='_blank' rel='noopener noreferrer'>{fileObject.link}</a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className='create'>
        <div className="createFolder">
          <button className="btn-upload creeate" onClick={handleCreateFolder}>
            Create folder
          </button>
        </div>
        {folders.map((folder, folderIndex) => (
          <div key={folderIndex} className="folder">
            <div className="createdFoldersStyle">
              <h3 className="myFolderName">{folder.name}</h3>
              <button className="btn-upload uppload" onClick={handleUploadToFolder}>
                Upload
              </button>
              <button className="btn-upload" onClick={() => handleDeleteFolder(folderIndex)}>
                Delete Folder
              </button>
              <div>
                {folder.files.map((fileObject, fileIndex) => (
                  <div key={fileIndex}>
                    <h3>
                      <i className='fa-solid fa-file ikon'></i>
                      {fileObject.name}
                    </h3>
                    <button className="Filebutton" onClick={() => handleDeleteFromFolder(folderIndex, fileIndex)}>
                      Delete
                    </button>
                    {fileObject.link && (
                      <p>
                        Link: <a href={fileObject.link} target='_blank' rel='noopener noreferrer'>{fileObject.link}</a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <AppCom/>
    </div>
  );
};

export default FileUploadComponent;