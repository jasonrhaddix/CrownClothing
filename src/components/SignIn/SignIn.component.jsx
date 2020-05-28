import React, { Component } from 'react'
import  { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './signin.styles.scss'

import FormInput from '../FormInput/FormInput.component'
import AppButton from '../AppButton/AppButton.component'

class SignIn extends Component {
    constructor (props) {
        super(props )

        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = async e => {
        e.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (err) {
            console.error('Login failed')
        }

    }

    changeHandler = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already habe an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.submitHandler}>
                    <FormInput
                        required
                        name='email' 
                        type='email' 
                        label='Email'
                        value={this.state.email}
                        handleChange={this.changeHandler} />
                    
                    <FormInput 
                        required
                        name='password' 
                        type='password' 
                        label='Password'
                        value={this.state.password}
                        handleChange={this.changeHandler} />
                    
                    <div className='buttons'>
                        <AppButton type='submit'>Sign In</AppButton>
                        <AppButton type='button' isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</AppButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
