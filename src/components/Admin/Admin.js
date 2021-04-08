import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faThLarge } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ManageProduct from "../ManageProduct/ManageProduct";

const Admin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState();
  const [manageDisplay, setManageDisplay] = useState(false);
  const [addDisplay, setAddDisplay] = useState(true);
  // console.log(imageURL);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      imageURL: imageURL,
      brand: data.brand,
      price: data.price,
    };
    console.log(eventData);
    const url = `https://evening-beach-95611.herokuapp.com/addEvent`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response"));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "388402b7293968f54d1c937d57919092");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("https://evening-beach-95611.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  const handleManageProduct = () => {
    setManageDisplay(true);
    setAddDisplay(false);
  };

  const handleAddProduct = () => {
    setAddDisplay(true);
    setManageDisplay(false);
  };
  return (
    <div className="mt-5">
      <div className="text-center d-flex justify-content-center">
        <button className="btn btn-outline-secondary" onClick={handleManageProduct}>
          <FontAwesomeIcon icon={faThLarge} />
          Manage Product
        </button>
        <button className="btn btn-outline-secondary" onClick={handleAddProduct}>
          <FontAwesomeIcon icon={faPlus} />
          Add Product
        </button>
      </div>
      <div className="d-flex justify-content-center mt-5">
        {manageDisplay ? (
          <div>
            <h1>Manage Product</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {cosmetics.map((cosmetic) => (
                <ManageProduct cosmetic={cosmetic}></ManageProduct>
              ))}
            </table>
          </div>
        ) : null}
        {addDisplay ? (
          <div className="">
            <h1 className="text-center">Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                Cosmetic Name <br />
                <input name="name" placeholder="Enter Name" ref={register} />
              </p>
              <p>
                Brand Name <br />
                <input name="brand" placeholder="Enter Name" ref={register} />
              </p>
              <p>
                Add Price <br />
                <input name="price" placeholder="Enter Price" ref={register} />
              </p>
              <p>
                Add Cosmetics Photo <br />
                <input
                  onChange={handleImageUpload}
                  type="file"
                  name="photo"
                  ref={register({ required: true })}
                />
              </p>
              <br />
              <input className="btn btn-outline-secondary text-center" type="submit" />
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
