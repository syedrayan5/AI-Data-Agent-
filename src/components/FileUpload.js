import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [tableName, setTableName] = useState('');

  const handleUpload = async () => {
    if (!file || !tableName) {
      alert("Select a file and enter table name!");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("table_name", tableName);

    try {
      const res = await axios.post("http://127.0.0.1:8000/upload", formData);
      alert(`Uploaded table: ${res.data.table}`);
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Upload Excel File</h3>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Table Name"
        value={tableName}
        onChange={e => setTableName(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
