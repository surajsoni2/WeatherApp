import React,{useState,useEffect} from 'react'
import Cards from './Cards';
const WeatherInfo = ({tempInfo}) => {

    const [weatherState, setWeatherState] = useState("");
    const {
        temp,
        humidity,
        pressure,
        weatherMode,
        name,
        country,
        speed,
        sunset

    }=tempInfo;

  
    useEffect(() => {
      if(weatherMode){
        switch (weatherMode) {
            case "Clouds": setWeatherState("wi-day-cloudy")
                break;
            case "Haze": setWeatherState("wi-fog");
                break;
            case "Clear": setWeatherState("wi-day-sunny");
                break;
            case "Mist": setWeatherState("wi-dust");
                break;
            case "Smoke": setWeatherState("wi-smoke");
                break;
            default: setWeatherState("wi-day-sunny");
            break;
        }
      }
    
    }, [weatherMode])
    
    let sec = sunset;
    let date = new Date(sec*1000);
    let time = `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})}`

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date()

    const properties = [
        {
            name: 'sunset',
            value: time,
            icon: 'wi wi-sunset'
        },
        {
            name: 'pressure',
            value: pressure,
            icon: 'wi wi-rain'
        },
        {
            name: 'humidity',
            value: humidity,
            icon: 'wi wi-humidity'
        },
        {
            name: 'speed',
            value: speed,
            icon: 'wi wi-strong-wind'
        },
    ]
  return (
    <>
    <div className="container">
        <div>
            <div className="place">
            <i className="fa fa-location-dot"></i>
                <span>{name}, {country}</span>
            </div>
            <div className="date">
                {months[d.getMonth()]} {d.getDate()} <span className='weekDay'>{days[d.getDay()]}</span></div>
        </div>
        <div className="icon">
            <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="temparature">
            <i className="wi wi-thermometer" id='thermameter'></i>
            <span>{temp}</span>
            <i className="wi wi-celsius" id="degree"></i>
            <div className="weatherCondition">{weatherMode}</div>
        </div>
    </div>
    <div className="cards">
        {properties.map((item)=>
            <Cards item={item} />
        )}
    </div>

    </>
  )
}

export default WeatherInfo