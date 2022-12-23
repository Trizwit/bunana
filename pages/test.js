import React, {useState, useEffect} from 'react';


function App() {

//   let [dogImage, setDogImage] = useState(null)
// function myfunction(){
//     console.log("lets go");
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {setDogImage(data.message);
//     console.log(data);
//     });
// }
   
//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {setDogImage(data.message);
//     console.log(data);
//     })
//   },[])
myfunction();
  return (
    <div className="App">
        {/* 5. Using *dogImage as* the *src* for our image*/}
    {dogImage && <img src={dogImage}></img>}
    </div>
  );
}

export default App;