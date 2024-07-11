import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <div className='text-center'>
    <div class="list-group">
    <h3>Admin Panel</h3>
    <Link to='/dashboard/admin/create-category' class="list-group-item">Create category</Link>
    <Link to='/dashboard/admin/create-product' class="list-group-item">Create Product</Link>
    <Link to='/dashboard/admin/users' class="list-group-item">User</Link>
  </div>
    </div>
  )
}

export default AdminMenu
