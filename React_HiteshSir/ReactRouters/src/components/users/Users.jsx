import React from 'react'
import { useParams } from 'react-router-dom'
function Users() {
  const { id } = useParams()
  return (
    <div className='bg-black text-white p-2 text-center text-xl font-bold'>User : {id}</div>
  )
}

export default Users