import React from 'react';
import { useState, useEffect } from 'react';
import './form.scss';

function Form(props) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = { ...props.requestParams };
    // GET method

    props.handleApiCall(formData);
  };

  const handleUrlChange = (e) => {
    let { name, value } = e.target;
    props.setRequest((prevRequest) => ({ ...prevRequest, [name]: value }));
  };

  const handleMethodChange = (e) => {
    let { value } = e.target;
    props.setRequest((prevRequest) => ({...prevRequest, method: value}));
  };

  useEffect(() => {
    return () => {
      console.log('form removed');
    };
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handleUrlChange} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleMethodChange}>GET</span>
          <span id="post" onClick={handleMethodChange}>POST</span>
          <span id="put" onClick={handleMethodChange}>PUT</span>
          <span id="delete" onClick={handleMethodChange}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;

// EOF
