import React from 'react';
import './Cosmetic.css';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cosmetic = (props) => {
    const { name, price, imageURL, _id } = props.cosmetic;
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="card mb-3 border-0 shadow ">
                <img src={imageURL} className="card-img-top p-4" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className="d-flex justify-content-between p-3">
                    <h2>${price}</h2>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-info"><FontAwesomeIcon icon={faShoppingCart} />Buy Now</button></Link>
                </div>
            </div>
        </div>
    )
};

export default Cosmetic;