import React, { useEffect } from 'react';

export default function listener() {
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        document.body.addEventListener('keydown', onKeyDown);
      }, []);
      
      function onKeyDown(event) {
        console.log(event);
        document.getElementById('listener').innerHTML=event['code'];
      }

    return (
        <div className='titulo'>
        <h1>Press any key</h1>
        <h1 id="listener" className="mt-16 bg-yellow-300"></h1>
    </div>

    )
}