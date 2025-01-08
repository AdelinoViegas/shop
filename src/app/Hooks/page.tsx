"use client";

import { useEffect } from 'react';

function App() {
  //const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then( response => response.json())
     
      .then((data)=>{
          console.log(data.results);
      })

  }, []);

  return (
    <div>

    </div>
  );
}




