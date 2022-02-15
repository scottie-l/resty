import React from 'react';
import './form.scss';

class Form extends React.Component { // function Form(props) 

  handleSubmit = e => { //function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    this.props.handleApiCall(formData); //props.handleApiCall(formData);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}> // <form onSubmit={handleSubmit}></form>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }
}

export default Form;

// EOF