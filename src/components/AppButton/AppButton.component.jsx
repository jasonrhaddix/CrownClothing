import React from 'react'

import './app-button.styles.scss'

const AppButton = ({ 
    children, 
    isGoogleSignIn, 
    inverted, 
    ...buttonProps }) => (
    <button className={`app-button ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}`}  {...buttonProps}>
        {children}
    </button>
)

export default AppButton
