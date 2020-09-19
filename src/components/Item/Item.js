import React from 'react';
import './Item.css'

const Item = ({ id, name, imageUrl }) => {
    return(
        <div className='item-card' id={id}>
            <img className='item-image' src={imageUrl} alt={name} />
            <h1 className='item-name'>{name}</h1>
            <button name={name} onClick={handleClick}>Send Text</button>
        </div>
    )
}

export default Item