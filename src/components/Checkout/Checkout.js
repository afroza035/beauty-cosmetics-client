import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Checkout = () => {
  const { id } = useParams();
  const [product, setPRODUCT] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://evening-beach-95611.herokuapp.com/event/${id}`)
      .then((res) => res.json())
      .then((data) => setPRODUCT(data));
  }, [id]);
  console.log(product);

  const {name, price, brand} = product;
  const dateTime = new Date();

  const handelCheckout = () => {
    const newOrder = { ...loggedInUser, name, price, brand, dateTime };
    fetch("https://evening-beach-95611.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Cosmetic Name</th>
            <th scope="col">Brand Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>1</td>
            <td>{product.price}</td>
          </tr>
          <tr>
            <td colSpan="3">Total:</td>
            <td>${product.price}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <Link to={`/orderSuccess/${product._id}`}>
          <button onClick={handelCheckout} className="mr-5 btn btn-success">
            <FontAwesomeIcon icon={faShoppingBasket} /> Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
