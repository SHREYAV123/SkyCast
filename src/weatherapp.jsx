import { useState } from 'react';
import Search from './searchbox'
import Info from './infobox';

export default function Weather(){
    const [info , setInfo]=useState({
        city:"WonderLand",
        description: "haze",
       feelsLike: 37.73,
       humidity: 70,
       tempMax: 31.05,
       tempMin: 31.05,
       temperature: 31.05,
       wind: 2.57,
    });
    let updateInfo=(newInfo)=>{
        setInfo(newInfo);}
    return (
        <div className="weather">
            <h1>Weather App</h1>
            <Search updateInfo={updateInfo}/>
            <Info info={info}/>
        </div>
        );
}