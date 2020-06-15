import React from 'react'
import './custombutton.scss'


const CustomButton = ({ children, isGooglesignIn, ...otherProps }) => {
    return (
        <button className={`${isGooglesignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
