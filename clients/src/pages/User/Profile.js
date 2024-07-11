import React from 'react'
import Layout from '../../components/Layouts/Layout'
import UserMenu from '../../components/Layouts/UserMenu'

const Profile = () => {
  return (
    <Layout>
            <div className='container-flui p-3 m-3'>
            <div className='row'>
              <div className='col-md-3'>
              <UserMenu/>
              </div>
              <div className='col-md-9'>User Profile</div>
            </div>
            </div>     
        </Layout>
  )
}

export default Profile
