import React from 'react'
import Layout from '../../components/Layouts/Layout'
import AdminMenu from '../../components/Layouts/AdminMenu'

const CreateProduct = () => {
  return (
    <Layout>
    <div className='row'>
      <div className='col-md-3'>
        <AdminMenu />
      </div>
      <div className='col-md-3'>
      <h1>
        CreateProduct
      </h1>
      </div>
    </div>
  </Layout>
  )
}

export default CreateProduct
