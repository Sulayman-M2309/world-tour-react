import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
 const {name,flags,area,population,cca3}=country;

 console.log(country)
 const [visited, setVisited]=useState(false)
 const handlevisited=()=>{
    setVisited (true);
 }
    return (
        <div className="country">
            <h3>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button  onClick={handlevisited}>Visited</button>{
                visited && 'I have visited this country'
            }
           
        </div>
    );
};

export default Country;