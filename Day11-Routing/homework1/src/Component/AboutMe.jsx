import imgProfile from '../Image/59-1.jpg';
import  '../Style/AboutMe.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function AboutMe () {
  return (
    <div style={{display: 'flex', justifyContent: "center", marginTop: 30}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="420"
          image={imgProfile}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             Mr.Jane
             
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Anat Srisaputh
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  )
}

export default AboutMe;