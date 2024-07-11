import React, { useState } from 'react'
import axios from 'axios'
import Layout from "../../components/Layouts/Layout.js"

import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const ForgetPassword = () => {
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/forget-password", {
        email, newPassword,answer
      }); 

      if (res && res.data.success) {
        toast.success(res.data && res.data.message)
        navigate("/");
      }
      else {
        toast.error(res.data.message)

      }
    }
    catch (error) {
      console.log(error)
      toast.error("somthing went wrong")
    }
  }

  return (
    <Layout title="Forget-Password - Ecommer App">
    <div className="form-container ">
      <form onSubmit={handleSubmit}>
        <h4 className="title">Rest Password</h4>

        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
       
        <div className="mb-3">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your New Password"
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
        <div>
          <button type="submit" onClick={() => navigate("/forgot-password")} className="btn btn-primary">
            FORGET PASSWORD
          </button>
           
        </div>
      </form>
    </div>
  </Layout>
  )
}

export default ForgetPassword
