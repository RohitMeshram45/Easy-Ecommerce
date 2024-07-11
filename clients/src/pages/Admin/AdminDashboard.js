import React from 'react'
import Layout from '../../components/Layouts/Layout.js'
import AdminMenu from '../../components/Layouts/AdminMenu.js'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className='container-fluid bg-slate-500'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          <div className='col-md-7'>
              <div className='card'>
                 <h1>Admin Name : {auth?.user?.name}</h1>
                 <h1>Admin Email : {auth?.user?.email}</h1>
                 <h1>Admin address : {auth?.user?.address}</h1>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard
