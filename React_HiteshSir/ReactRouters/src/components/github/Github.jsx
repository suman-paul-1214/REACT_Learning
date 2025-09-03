import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/suman-paul-1214')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  return (
    <div className='bg-black text-white p-2 text-center text-xl font-bold'>Github Followers : {data.followers}

    <img src={data.avatar_url} alt="Profile Photo" />

    </div>
  )
}

export default Github