import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import AppButton from '../AppButton/AppButton.component'
import CartItem from '../CartItem/CartItem.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <AppButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>CHECKOUT</AppButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))