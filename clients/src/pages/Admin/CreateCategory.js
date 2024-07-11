import React from 'react'
import Layout from '../../components/Layouts/Layout'
import AdminMenu from '../../components/Layouts/AdminMenu'

const CreateCategory = () => {
  return (
    <Layout>
    <div className='row'>
      <div className='col-md-3'>
        <AdminMenu />
      </div>
      <div className='col-md-3'>
      <h1>
      CreateCategory
      </h1>
      </div>
    </div>
  </Layout>
  )
}

export default CreateCategory
