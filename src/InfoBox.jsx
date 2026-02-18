import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ info }) {

  const HOT_URL ="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=1000";
  const COLD_URL ="https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=1000";
  const RAIN_URL ="https://images.unsplash.com/photo-1602321146681-e84edc3e452c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className='cardContainer'>

        <Card sx={{ maxWidth: 345 }}>

          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />

          <CardContent>

  <Typography gutterBottom variant="h5">
    {info.city}{" "}
    {info.humidity > 80
      ? <ThunderstormIcon />
      : info.temp > 15
      ? <SunnyIcon />
      : <AcUnitIcon />
    }
  </Typography>

  {/* FIXED HERE */}
  <Typography variant="body2" color="text.secondary" component="div">

    <div>Temperature = {info.temp}°C</div>
    <div>Humidity = {info.humidity}</div>
    <div>Min Temp = {info.tempMin}°C</div>
    <div>Max Temp = {info.tempMax}°C</div>
    <div>Feels Like = {info.feelslike}°C</div>

  </Typography>

</CardContent>


        </Card>

      </div>
    </div>
  );
}
