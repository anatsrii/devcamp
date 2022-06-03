import '../Style/Home.css';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Home () {
  return (
    <>
   <div >
     <nav>
       <ul>
         <li> <Link to="/">Home</Link> </li>
         <li><Link to="/portfolio">Portfolio</Link></li>
         <li><Link to="/about-me">About Me</Link></li>
         <li><Link to="/contact-me">Contact Me</Link></li>
         <li><Link to="*"></Link></li>
       </ul>
     </nav>
   </div>
   <div style={{display: 'flex', justifyContent: "center", marginTop: 30}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://img.seadn.io/files/3b34b3aa95c30afc4e1d55b245af0e92.png?auto=format&h=720&w=720"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Day 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            HTML CSS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
   </>
  )
}

export default Home;