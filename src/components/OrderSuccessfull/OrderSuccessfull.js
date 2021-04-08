import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OrderSuccessfull = () => {
    const { id } = useParams();
    const [product, setPRODUCT] = useState({});
    useEffect(() => {
      fetch(`https://evening-beach-95611.herokuapp.com/event/${id}`)
        .then((res) => res.json())
        .then((data) => setPRODUCT(data));
    }, [id]);
    console.log(product);
    return (
        <div>
            <h1>Order Successfull</h1>
            <p>Your Product: {product.name}</p>
            <p>Total Price: {product.price}</p>
        </div>
    );
};

export default OrderSuccessfull;