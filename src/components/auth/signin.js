import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class Signin extends Component {
  handleFormSubmit(obj) {
    // в obj должны приходить свойства email и password со значениями из input-ов после нажатия submit
    console.log(obj, this);
  }
  render() {
    const { handleSubmit, fields: { email, password } } = this.props; // приходят из reduxForm reducera
    console.log(handleSubmit, email, password);
    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} className='form-control' />
        </fieldset>
        <button action='submit' className='btn btn-primary'>Sign in</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin)
