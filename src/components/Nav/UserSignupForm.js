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
    this.props.handleLogin()
    this.refs.userSignupForm.reset()
  }

  render() {
    return(
      <section className={ styles.userSignupForm }>
        <form ref='userSignupForm'>
          <lable htmlFor='name'>Name</lable>
          <input ref='name' id='name' />
          <lable htmlFor='email'>Email</lable>
          <input ref='email' id='email' />
          <lable htmlFor='password'>Password</lable>
          <input ref='password' id='password' />
        </form>
        <button className={ styles.red } onClick={ this.props.handleSignUpClick }>Cancel</button>
        <button className={ styles.green } onClick={ this.handleFormSubmit.bind(this) }>Sign Up</button>
      </section>
    )
  }
}
