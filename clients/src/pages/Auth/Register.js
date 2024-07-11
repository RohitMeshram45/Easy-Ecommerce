import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layouts/Layout.js"
import "../../styles/AuthStyles.css"
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [answer, setAnswer] = useState("")
  const [role, setRole] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      const res = await axios.post("http://localhost:5000/api/v1/auth/register", {
        name, email, password, address, phone,answer,role
      });

      console.log(res)

      if (res && res.data.success) {
        toast.success(res.data.message)
        console.log("hellwo bol raha hu")
        navigate("/login");
      }
      else {
        toast.error(res.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error("somthing went wrong")
    }
  }
  return (
    <Layout title={"Register Pages"}>
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail2"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword3"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail4"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail5"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail5"
            placeholder="Enter Your faourate Sport"
            required
          />
        </div>
        <div className="mb-3">
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-control"
          id="exampleInputEmail5"
          placeholder="Enter Your Role"
   
        />
      </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>

    </Layout>
  )
}

export default Register
