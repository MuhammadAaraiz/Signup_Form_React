import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaUser, } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Sign_in = () => {
  return (
    <>
      <div className="Main_Container">
        <div className="Heading_Container ">
          <h4>Sign_In Page</h4>
        </div>
        <div className="Input_Container p-2">
          <label htmlFor="username" className="Labels_Container p-2" > Username : </label>
          <div className="Icons_Container  ">
            <FaUser className="pe-2 Input_Field" size={25} />
            <input className="Input_Fields" type="text" placeholder="Enter Your Username" name="username" required />
          </div>
        </div>
        <div className="Input_Container p-2">
          <label htmlFor="email" className="Labels_Container p-4" > Email : </label>
          <div className="Icons_Container">
            <IoIosMail className="pe-2 Input_Field" size={30} />
            <input className="Input_Fields" type="email" placeholder="Enter Your email" name="email" />
          </div>
        </div>
        <div className="Input_Container p-2">
          <label htmlFor="password" className="Labels_Container p-2" > Password : </label>
          <div className="Icons_Container">
            <RiLockPasswordFill className="pe-2 Input_Field" size={30} />
            <input className="Input_Fields" type="password" placeholder="Enter Your Password" name="password" required />
          </div>
        </div>
        <span className=""><a className="Foget_Link" href="">Forget_Password</a></span>
        <a href="Main_Terminal" className="Link">
          <button className="ms-5 Button"> Sign_In</button>
        </a>
        <div className="m-3 ">
          <span className="Links ">Don't Have an account </span>
          <a className="Link" href="/" >
            <button className="mt-2 ms-5 Button">Sign_Up</button>
          </a>
        </div>
      </div>
    </>
  )
};

export { Sign_in }