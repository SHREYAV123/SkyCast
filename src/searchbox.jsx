import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import {useState} from 'react';



export default function Search({updateInfo}){
    const formik = useFormik({
        initialValues: {
            city: ""
        },
        // onSubmit: (values) => {
            // console.log(values.city);
            // getWeatherInfo(values.city);
            // updateInfo(values.city);
     onSubmit: async (values) => {
                console.log(values.city);
                const weatherInfo = await getWeatherInfo(values.city); 
                if (weatherInfo) {
                updateInfo(weatherInfo); }
                
        }
        });

        let [error,SetError] = useState(false);


        const API_URL="https://api.openweathermap.org/data/2.5/weather?"
        const API_KEY="79f7c7df1732b5a4c3b6cb13e7234006";
        let getWeatherInfo = async (city) => {

        try{
          let res = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
          let data = await res.json();
          let ans={
            city: data.name,
            temperature: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            description: data.weather[0].description,
            feelsLike: data.main.feels_like
          }
          console.log(ans);
          return ans;
        }
        catch(e){
            SetError(true);
        }}

return (
    <div className="search">
        <h3>Search For The Weather</h3>
        <form onSubmit={formik.handleSubmit}>
        <TextField label="City Name" id='city' name='city' color="secondary" value={formik.values.city} onChange={formik.handleChange}  required />
        
        <br/> <br/>
    
        <Button variant="contained" type="submit" startIcon={<SearchIcon />} color="success">        
  Search
</Button>
{error && <p style={{color:"red"}}><b>NO SUCH PLACE EXISTS!</b></p>}

            
        </form>
    </div>
)
}