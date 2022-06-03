import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



function Portfolio () {

  return (
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
            Counter
          </Typography>
          <Typography variant="body2" color="text.secondary">
            HTML CSS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  )
}

export default Portfolio;