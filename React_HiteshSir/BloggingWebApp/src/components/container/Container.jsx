import React, { Children } from 'react'

//Container accepts properties as children
//isme styling properties define karte hai,isme jo v values hoti hai wosko as it is display kara dete hai
function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  )
}

export default Container