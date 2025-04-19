import React, { useState } from 'react';
import './UploadBox.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadBox = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!file) {
      toast.error('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsUploading(true);

    try {
      const response = await fetch('https://agnite-chatbot.onrender.com/upload_pdf/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Document uploaded successfully!');
      } else {
        toast.error('Document upload failed!');
      }
    } catch (error) {
      toast.error('Error occurred during upload!');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <input type="file" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload} disabled={!file || isUploading}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadBox;
