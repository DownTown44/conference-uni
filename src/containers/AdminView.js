import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Contact = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost/conference-backend/getPapers.php'
    })
    .then(res => {
      console.log(res.data)
      setPapers(res.data);
    })
    .catch(err => console.log(err.message));
  }, [])

  const downloadFile = (fileName) => {
    axios({
      method: 'post',
      url: 'http://localhost/conference-backend/downloadFile.php',
      headers: {
          'content-type': 'application/json'
      },
      data: {fileName: fileName}
    })
    .then(res => {
      console.log(res);
      console.log("File successfully downloaded.");
    })
    .catch(err => console.log(err.message));
  }

  return (
    <div className="adminView">
      <table>
        <tr>
          <th>Title</th>
          <th>Abstract</th>
          <th>Status</th>
          <th>FileName</th>
          <th>User</th>
        </tr>
        {papers.map((element) => (
          <tr>
            <td><a>{element.title}</a></td>
            <td><a>{element.abstract}</a></td>
            <td><a>{element.status}</a></td>
            <td><button onClick={() => downloadFile(element.paperDocument)}>{element.paperDocument}</button></td>
            <td><a>{element.email}</a></td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Contact;
