//import React from "react";
import React, {useState, useEffect} from "react";
import "./App.css";
//import axios - this time it's a locally installed node module 
import axios from 'axios';
//import my local components
//import Navigation from './components/Navigation'
import POD from './components/POD'
import Rover from './components/Rovers'


function App() {
//initialize slices of state
const [image, setImage] = useState('')
  const [curiosity, setCuriosity] = useState('')
  const [opportunity, setOpportunity] = useState('')
  const [spirit, setSpirit] = useState('')
  const [date, setDate] = useState('')
// set API key variable and API date variable
  const APIKey = `rIUGVz3aLJneZuhq2yv9kWCEglSv54OFI3fx5F39`
  const apiDate = `&date=${date}`
//I believe here is where I need to add the loading message... before useEffect  
useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}${apiDate}`)
.then(res => {
setImage(res.data)
})
.catch(err => {
console.log(err)
})
}, [date])

const handleInput = (e) => {
e.preventDefault()
setDate(e.target.value);
}

//here is where the Curiosity rover photos are fetched - curiosity variable set
useEffect(() => {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${APIKey}`)
.then(res => {
  // console.log(res)
setCuriosity(res.data.photos[Math.floor((Math.random() * res.data.photos.length) + 1)])
})
.catch(err => {
console.log(err)
})
}, [])

//here is effect where Opportunity is fetched and opportunity variable set
useEffect(() => {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1
  00&api_key=${APIKey}`)
.then(res => {
  // console.log(res)
setOpportunity(res.data.photos[Math.floor((Math.random() * res.data.photos.length) + 1)])
})
.catch(err => {
console.log(err)
})
}, [])

//here is effect where Spirit is fetched and spirit variable is set
useEffect(() => {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=100&api_key=${APIKey}`)
.then(res => {
  // console.log(res)
setSpirit(res.data.photos[Math.floor((Math.random() * res.data.photos.length))])
})
.catch(err => {
console.log(err)
})
}, [])




//what is returned

  return (
    <div className="App">
      <p>
        
      Pick a date below to go back in time. <span role="img" aria-label='go!'>🚀 </span>
      </p>
      <input type='date' onChange={handleInput}></input>
      <POD image={image}/>
      <Rover curiosity={curiosity} opportunity={opportunity} spirit={spirit}/>

    </div>
  );
}

export default App;
