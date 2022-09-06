import { useEffect, useState } from "react";
import { CardHeader, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function AttractionsComponent() {
  const [dataAttractions, setDataAttractions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:3003/attractions";
      const res = await fetch(url);
      const result = await res.json();
      console.log(result);
      setDataAttractions(result);
    };
    getData();
  }, []);

  return (
    <div>
      <Container>
        <Grid container spacing={{xs: 2, md: 3, lg: 4}}>
          {dataAttractions.map((data) => {
            return (
              <Grid key={data.id} item sm={12} md={6} lg={4}>
                <Card >
                  <CardHeader title={data.name} />
                  <CardMedia
                    component="img"
                    // height="100%"
                    image={data.coverimage}
                    alt={data.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {data.detail}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
