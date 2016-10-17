import React from 'react'
import styles from './userSignupForm.scss'

export default class UserSignupForm extends React.Component {
  handleFormSubmit() {
    let user = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.addUser(user)
    this.props.handleSignUpClick()
  }

  render() {
    return(
      <section className={ styles.userSignupForm }>
        <div>
          <lable htmlFor='name'>Name</lable>
          <input ref='name' id='name' />
          <lable htmlFor='email'>Email</lable>
          <input ref='email' id='email' />
          <lable htmlFor='password'>Password</lable>
          <input ref='password' id='password' />
        </div>
        <button onClick={ this.props.handleSignUpClick }>Cancel</button>
        <button onClick={ this.handleFormSubmit.bind(this) }>Sign Up</button>
      </section>
    )
  }
}
