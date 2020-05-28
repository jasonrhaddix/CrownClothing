import React, { Component } from 'react'

import './signup-styles.scss'

import FormInput from '../FormInput/FormInput.component'
import AppButton from '../AppButton/AppButton.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends Component {
    constructor (props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    submitHandler = async e => {
        e.preventDefault()

        const { displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert( "passowrds don't match" )
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (err) {
            console.error(err)
        }
    }

    changeHandler = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render () {
        const { displayName, email, password, confirmPassword} = this.state

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.submitHandler}>
                    <FormInput
                        required
                        type='text'
                        name='displayName'
                        label='Display Name'
                        value={displayName}
                        onChange={this.changeHandler} />

                    <FormInput
                        required
                        type='email'
                        name='email'
                        label='email'
                        value={email}
                        onChange={this.changeHandler} />

                    <FormInput
                        required
                        type='password'
                        name='password'
                        label='Password'
                        value={password}
                        onChange={this.changeHandler} />

                    <FormInput
                        required
                        type='password'
                        name='confirmPassword'
                        label='Confirm Password'
                        value={confirmPassword}
                        onChange={this.changeHandler} />

                    <AppButton type='submit'>Sign Up</AppButton>
                </form>
            </div>
        )
    }
}

export default SignUp