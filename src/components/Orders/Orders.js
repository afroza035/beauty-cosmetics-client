import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://evening-beach-95611.herokuapp.com/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);
  
  return (
    <div>
      <h1>Total Order</h1>
      <p>Name: {loggedInUser.name}</p>
      <p>Email: {loggedInUser.email}</p>
      <div className="">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Cosmetic Name</th>
              <th scope="col">Date Time</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody>
              <tr>
                <td>{order.name}</td>
                <td>{order.dateTime}</td>
                <td>{order.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
