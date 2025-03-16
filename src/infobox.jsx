import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './infobox.css';




export default function Info({info}){


const HOT_URL="https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg";
const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
const COLD_URL="https://images.unsplash.com/photo-1687904368738-ca6423635666?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const RAIN_ICON = "https://img.icons8.com/?size=100&id=ESeqfDjC5eVO&format=png&color=000000"; // Direct link to rain icon
const COLD_ICON = "https://img.icons8.com/?size=100&id=wgC4n5niQXU_&format=png&color=000000"; // Direct link to snowflake icon
const HOT_ICON = "https://img.icons8.com/?size=100&id=YPTOhlU4qO2D&format=png&color=000000"; // Direct link to sun icon


    
        return(
        <div className="info">
    <h2>Weather Info : {info.description.toUpperCase()}</h2>

            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={info.humidity>80?RAIN_URL:info.temperature>15?HOT_URL:COLD_URL}
          alt="weather"
        />

        <CardContent>
        <div className="cardHeader">
          <Typography gutterBottom variant="h5" component="div">
           {info.city.toUpperCase()}  </Typography>
           {<img 
  src={info.humidity > 80 ? RAIN_ICON : info.temperature > 15 ? HOT_ICON : COLD_ICON} 
  alt="weather icon" 
  width="50" 
  height="50" 
/>}

          
          </div>
          <Typography variant="body2" sx={{ color: 'text.dark' }} component={"span"}>
           <p>Temperature: {info.temperature}&deg;C</p>
           <p>Humidity: {info.humidity}%</p>
           <p>Wind: {info.wind} m/s</p>
           <p>The weather can be describe as<b> {info.description}</b> and feels like: {info.feelsLike}&deg;C</p>
           <p>Max Temperature: {info.tempMax}</p>
           <p>Min Temperature: {info.tempMin}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

        </div>
    )
}