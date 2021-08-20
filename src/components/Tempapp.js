import React, { useEffect, useState } from 'react';
import "./css/style.css";


const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e91b24957c466cb1c36bc7d2a31c01c1`;
            const response = await fetch(url); //The fetch() API is an inbuilt JavaScript method for getting resources from a server or an API endpoint. The fetch() API method
            // always takes in a compulsory argument, which is the path or URL to the resource you want to fetch. 
            //It returns a promise that points to the response from the request, whether the request is successful or not

            const resJson = await response.json();
            setCity(resJson.main);
        };

        fetchApi();
    },[search])

    return (
        <>
            <div className="box">
                 <div className="inputData">
                     <input
                     type="search"
                     
                     className="inputField"
                     onChange= {(e) => {
                         setSearch(e.target.value)

                     }} />
                 </div>
          {
              !city? (
                  <p>No Data Found</p>
              ) :(
                  <div>
                <div className="info">
                <h2 className="location"> 
                <i className="fas fa-street-view"></i>{search}
                </h2>
                
                <h1 className="temp">
                    {city.temp} F

                </h1>
                <h3 className="tempmon_max">

                </h3>
           </div>  
           
           </div>
              )
          }

            <div className="wave -one"></div>  
           <div className="wave -two"></div>  
           <div className="wave -three"></div>  
            </div>
        </>

    )
}
export default Tempapp;