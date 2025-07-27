import { useState } from "react";

function StyleInline() {

  const [cardStyle, setCardStyle] = useState({
        width: '300px',
        border: '1px solid black',
        borderRadius: '5px',
        overflow: 'hidden',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        margin: '10px'
      })

      const updateTheme = (bgColor) => {
        setCardStyle({ ...cardStyle, backgroundColor: bgColor });
      }
       const [isGrid, setIsGrid] = useState(true);

  return (
    <>
      <h1 style={{ color: 'blue', fontSize: '20px' }}>DYNAMIC AND CONDITIONAL INLINE STYLING</h1>

      <button onClick={() => setCardStyle({ ...cardStyle, backgroundColor: 'grey' })}>Grey Theme</button>

      <button onClick={()=>updateTheme('orange')}>default Theme</button>

      <button onClick={() => setIsGrid(!isGrid)}>Toggle Grid</button>

      <div style={{display : isGrid ? 'flex' : 'block', flexWrap: 'wrap', gap: '10px', justifyContent: 'center'}}>
        <div style={cardStyle}>
          <img style={{ width: '100%', height: 'auto' }}
          src="https://th.bing.com/th/id/R.d3728525383d387b0e1c017544d6acfb?rik=qVEr6f4WkrYwyQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f1%2fa%2f633496.jpg&ehk=dkfKLc0qsOjKPUEAUiZ13prdV5vbtPEnBejYMNuZ6P0%3d&risl=&pid=ImgRaw&r=0" alt="Radha Krishna" />
          <div style={{ padding: '10px' }}>
            <h2>Radha Krishna</h2>
            <p>Bhagwan</p>

          </div>

        </div>
        <div style={cardStyle}>
          <img style={{ width: '100%', height: 'auto' }}
          src="https://th.bing.com/th/id/R.d3728525383d387b0e1c017544d6acfb?rik=qVEr6f4WkrYwyQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f1%2fa%2f633496.jpg&ehk=dkfKLc0qsOjKPUEAUiZ13prdV5vbtPEnBejYMNuZ6P0%3d&risl=&pid=ImgRaw&r=0" alt="Radha Krishna" />
          <div style={{ padding: '10px' }}>
            <h2>Radha Krishna</h2>
            <p>Bhagwan</p>

          </div>

        </div>
        <div style={cardStyle}>
          <img style={{ width: '100%', height: 'auto' }}
          src="https://th.bing.com/th/id/R.d3728525383d387b0e1c017544d6acfb?rik=qVEr6f4WkrYwyQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f1%2fa%2f633496.jpg&ehk=dkfKLc0qsOjKPUEAUiZ13prdV5vbtPEnBejYMNuZ6P0%3d&risl=&pid=ImgRaw&r=0" alt="Radha Krishna" />
          <div style={{ padding: '10px' }}>
            <h2>Radha Krishna</h2>
            <p>Bhagwan</p>

          </div>

        </div>
        <div style={cardStyle}>
          <img style={{ width: '100%', height: 'auto' }}
          src="https://th.bing.com/th/id/R.d3728525383d387b0e1c017544d6acfb?rik=qVEr6f4WkrYwyQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f1%2fa%2f633496.jpg&ehk=dkfKLc0qsOjKPUEAUiZ13prdV5vbtPEnBejYMNuZ6P0%3d&risl=&pid=ImgRaw&r=0" alt="Radha Krishna" />
          <div style={{ padding: '10px' }}>
            <h2>Radha Krishna</h2>
            <p>Bhagwan</p>

          </div>

        </div>

      </div>
      
    </>
  );
}

export default StyleInline;