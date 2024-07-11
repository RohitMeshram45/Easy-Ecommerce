import React from 'react'
import Layout from '../../components/Layouts/Layout'
import UserMenu from '../../components/Layouts/UserMenu'
import { useAuth } from '../../context/auth'

const Dashboard = () => {
    const [auth] = useAuth();
  return (
    <Layout title={`Dashboard - Ecommerce`}>
      <div className='container-flui m-3 p-3'> 
        <UserMenu/>
      </div>
      <div className='container-flui m-3 p-3'>
         <div className='card w-75 p-3'>
           <h3>{auth?.user?.name}</h3>
           <h3>{auth?.user?.email}</h3>
           <h3>{auth?.user?.address}</h3>
         </div>
      </div>
    </Layout>
  )
}

export default Dashboard