import React,{useState,useEffect} from 'react'
import WeatherInfo from './WeatherInfo';
import "./design.css";

const Temp = (props) => {
    const [searchValue, setSearchValue] = useState("Lucknow");
    const [tempInfo, setTempInfo] = useState({});

    
    const getWeatherInfo = async ()=>{
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${props.apikey}`
            const res =await fetch(url);
            const data =await res.json();

            const {temp,humidity,pressure,} = data.main;
            const {main: weatherMode} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;

            const myWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMode,
                name,
                country,
                speed,
                sunset

            };
            setTempInfo(myWeatherInfo);

            console.log(myWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      getWeatherInfo();

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
  return (
    <>
    <div className="wrap">
        <div className="search">
            <input type="search"
                placeholder='Search...'
                autoFocus
                id='search'
                className='searchTerm'
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
            />
            <button className="searchButton" type="button" onClick={getWeatherInfo}>🔍</button>
        </div>
    <WeatherInfo tempInfo={tempInfo}/>
    </div>
    <footer>
        Created by - <a href="https://www.linkedin.com/in/suraj-soni-81020a201/">Suraj Soni </a>
        &nbsp; | Copyright - 2023
    </footer>
    </>
  )
}

export default Temp