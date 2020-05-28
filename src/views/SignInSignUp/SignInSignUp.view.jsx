import React from 'react'

import './sign-in-sign-up.styles.scss'

import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/SignUp/SignUp.component'

const SignInSignUpPage = () => (
    <div className='sign-in-sign-up-page'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUpPage