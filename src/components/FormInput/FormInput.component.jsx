import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...inputProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...inputProps}/>
        {
            label 
                ? (<label className={`${inputProps.value.length ? 'shrink': ''} form-input-label`}>{label}</label>) 
                : null
        }
        
    </div>
)

export default FormInput