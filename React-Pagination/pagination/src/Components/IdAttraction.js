import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { Container, Grid, Typography, CardMedia } from "@mui/material";


export default function IdAttraction  () {
  const params = useParams();
  const attractionId = params.attractionId;
  const [pageId, setPageId] = useState([]);

  useEffect( ()=> {
   const getIdAttraction = async () => {
    const url = `http://localhost:3003/attractions/${attractionId}`;
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    setPageId(result);

   }
   getIdAttraction();
  },[attractionId])

  return (
    <div className="App">
      <Container>
        <Grid container spacing={{xs: 2, md: 3, lg: 4}}>
         {pageId.map( (data) => {
          return( <Grid key={data.id} item > 
          <h3>{data.name}</h3>
          <CardMedia
                    component="img"
                    image={data.coverimage}
                    alt={data.name}
                    style={{maxHeight: "100%", maxWidth: "100%"}}
                  />
          <p/>
          <Typography>
            {data.detail}
          </Typography>
          </Grid>
         )
         }
         )}
        </Grid>
      </Container>
    </div>
  )
}