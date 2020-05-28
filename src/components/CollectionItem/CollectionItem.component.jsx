import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'

import AppButton from '../AppButton/AppButton.component'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <div className='name'>{ name }</div>
                <div className='price'>{ price }</div>
            </div>
            <AppButton 
                inverted 
                onClick={() => addItem(item)}>
                Add to cart
            </AppButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)