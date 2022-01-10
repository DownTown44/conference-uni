import React, { useState, useEffect } from 'react';

import { useCookies } from "react-cookie";
import axios from 'axios'

const ApplicationForm = (props) => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [user, setUser] = useState({
    role: null
  });
  const [sections, setSection] = useState([
    {
      name: ""
    }
  ]);
  const [form, setForm] = useState({
    email: "",
    sectionID: "",
    title: "",
    fileName: "",
    abstract: "",
    file: ""
  });
  
  const updateForm = (name, value) => {
    setForm({
      ...form,
      [name]: value
    })
  }
  
  const onFileChange = (event) => {
    updateForm('file', event.target.files[0]);
  };

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost/conference-backend/getUser.php',
      headers: {
        'content-type': 'application/json'
      },
      data: cookies.user
    })
    .then(res => {
      console.log(res.data.result);
      if(res.data.result) {
        setUser(res.data.result);
      }
    })
    .catch(err => console.log(err.message));
  }, [])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost/conference-backend/sections.php'
    })
    .then(res => {
      setSection(res.data);
      updateForm('sectionID', res.data[0].id);
    })
    .catch(err => console.log(err.message));
  }, [])

  const fileUpload = () => {
    const formData = new FormData();
    const fileName = user.firstName + '_document' + form.sectionID
    formData.append(
      "file",
      form.file,
      fileName.toLowerCase()
    );

    updateForm('fileName', fileName.toLowerCase());

    axios.post('http://localhost/conference-backend/fileUpload.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        updateForm('email', user.email);
        fileDataUpload();
    })
      .catch(err => console.log(err.message));
  }

  const fileDataUpload = () => {
    axios({
      method: 'post',
      url: 'http://localhost/conference-backend/fileDataUpload.php',
      headers: {
          'content-type': 'application/json'
      },
      data: form
    })
    .then(res => {
      if(res.data.result) {
        alert("File uploaded successfully!");
      }
    })
    .catch(err => console.log(err.message));
  }

  const submitForm = (event) => {
    event.preventDefault()
    fileUpload();
  };

  return (
    <div className="application">
      <h3>{props.applyText}</h3>
      <form className="application__form">
        <div className="application__form-field">
          <label>Select a section</label>
          <select onChange={(e) => updateForm('sectionID', e.target.value)}>
            {sections.map((element) => {
              return (
                <option 
                  key={element.id} 
                  value={element.id}>{element.name}</option>
              );
            })}
          </select>
        </div>
        <div className="application__form-field">
          <label>Title</label>
          <input type='text' name='title' placeholder='Title' onChange={(e) => updateForm('title', e.target.value)}/>
        </div>
        <div className="application__form-field">
          <label>Abstract</label>
          <input type='text' name='abstract' placeholder='Abstract' onChange={(e) => updateForm('abstract', e.target.value)}/>
        </div>
        <div className="application__form-field">
          <label>File</label>
          <input type='file' onChange={(e) => onFileChange(e)}/>
        </div>
        <button 
          className="ctaButton" 
          disabled={user.role === "Presenter" ? false : true}
          onClick={(e) => submitForm(e)}>Apply</button>
      </form>
    </div>
  )
}

export default ApplicationForm;
