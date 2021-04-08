import React from 'react';
import './ManageProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageProduct = (props) => {
    const{name, price, brand, _id} = props.cosmetic;
    const deleteEvent = id => {
    fetch('https://evening-beach-95611.herokuapp.com/deleteEvent/'+id, {
        method: 'DELETE',
        
    })
    .then(res => res.json())
    .then(data => console.log('delete successfully'))
    }
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{brand}</td>
                <td>${price}</td>
                <td><button onClick={() => deleteEvent(_id)} className="trash"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
            </tr>
        </tbody>
    );
};

export default ManageProduct;