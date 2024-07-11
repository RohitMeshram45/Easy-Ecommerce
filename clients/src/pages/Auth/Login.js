import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layouts/Layout'

import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/auth'

const Login = () => {
  const [auth, setAuth] = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
        email, password
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem("auth", JSON.stringify(res.data))
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
    <Layout title="Login - Ecommer App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className='d-flex flex-column d-grid gap-3'>
            <button type="button" onClick={() => navigate("/forgot-password")} className="btn btn-primary">
              FORGET PASSWORD
            </button>
            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login;
