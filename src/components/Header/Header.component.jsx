import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/original.svg' 
import CartIcon from '../CartIcon/CartIcon.component'
import CartDropdown from '../CartDropdown/CartDropdown.component'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo  className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            {
                currentUser
                    ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    : <Link className='option' to='/signin'>Sign In</Link>
            }
            <CartIcon />
        </div> 
        { hidden ? <CartDropdown /> : null } 
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)