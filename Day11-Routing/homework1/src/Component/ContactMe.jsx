
import Card from '@mui/material/Card';
import lineIcon from '../Image/line.png'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import tel from '../Image/smartphone-call.png';
import gmail from '../Image/gmail.png';

function ContactMe () {
  
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      
      <Typography sx={{ fontSize: 18,mb: 1.5 }} >
        <img src={gmail} alt="mail-icon"/>  {'\u00A0'}  anat.srii@gmail.com
      </Typography>
      <Typography sx={{ fontSize: 18,mb: 1.5 }}>
        <img src={tel} alt="phone-icon" /> {'\u00A0'}  0646191982
      </Typography>
      <Typography sx={{ fontSize: 18 , mb:1.5}}  >
        <img src={lineIcon}alt='Phone-icon' /> {'\u00A0'} {'\u00A0'}
        hero_unwanted
      </Typography>
    </CardContent>

  </Card>

  );
}

export default ContactMe;