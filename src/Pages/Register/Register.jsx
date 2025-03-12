import React, { useState } from "react";
import "./Register.css";
import Swal from "sweetalert2";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    pincode: "",
    street: "",
    city: "",
    state: "",
  });


  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  
  const onSubmitHandler = (event) => {
    event.preventDefault(); // Prevent page reload

    
    const isEmptyField = Object.values(data).some((value) => value.trim() === "");

    if (isEmptyField) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all the fields.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "tomato",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: `${data.firstname} ${data.lastname} Successfully Registerd`,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "tomato",
      });

      
      setData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        country: "",
        pincode: "",
        street: "",
        city: "",
        state: "",
      });
    }
  };

  return (
    <div>
      <form className="register" onSubmit={onSubmitHandler}>
        <div className="register-left">
          <p className="title">Registration Form</p>
          <div className="multi-fields">
            <input type="text" placeholder="First Name" name="firstname" value={data.firstname} onChange={onChangeHandler} required />
            <input type="text" placeholder="Last Name" name="lastname" value={data.lastname} onChange={onChangeHandler} required />
          </div>
          <input type="email" placeholder="Email" name="email" value={data.email} onChange={onChangeHandler} required />
          <input type="text" placeholder="Street" name="street" value={data.street} onChange={onChangeHandler}  />
          <div className="multi-fields">
            <input type="text" placeholder="City" name="city" value={data.city} onChange={onChangeHandler} required />
            <input type="text" placeholder="State" name="state" value={data.state} onChange={onChangeHandler} required />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Pin Code" name="pincode" value={data.pincode} onChange={onChangeHandler} required />
            <input type="text" placeholder="Country" name="country" value={data.country} onChange={onChangeHandler} required />
          </div>
          <input type="tel" placeholder="Phone" name="phone" value={data.phone} onChange={onChangeHandler} required />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
