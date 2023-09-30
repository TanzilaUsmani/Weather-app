import React, { useEffect, useState } from "react";

function Wheater(){
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState(null);
   
    
useEffect(()=>{
async    function fetchapi(){
const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=66e544263520e6806e529febf6b7fd54`
    const result=await fetch(url);
    const resJson=await result.json();
    setCity(resJson.main);
}
   fetchapi();
},[search])
    return(
        <>
        <div className="container">
        <div className="box">
      <label for="usr">Enter City Name:</label>
      <input type="search" className="form-control" id="usr" onChange={(e)=>{setSearch(e.target.value)}}/ >
    
    {!city?(
        <p>no data found</p>)
        : (
        <div className="info">
        <h2>City Name:{search}</h2>
        <h2 className="temp">Temprature:{city.temp}°C</h2>
        <h2 className="max-temp">Pressure:{city.pressure}</h2>
        <h2 className="max-temp">Humidity:{city.humidity}</h2>
    </div>
    
     )}
     </div>
     </div>
</>
    
    
       )
}
export default Wheater;