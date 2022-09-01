import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function Home() {
  const [attractions, setAttractions] = useState([]);
  useEffect(() => {
    async function getData() {
      const url = 'http://localhost:3000/api/allAttractions';
      const response = await fetch(url);
      const res = await response.json();
      console.log(res.results);
      setAttractions(res.results);
      console.log(attractions)
    }
    getData();
  }, []);
  return (
    <div>
      <Container maxWidth="sm" >
        <Grid spacing={2}>
          {attractions.map((data) => {
            return (
              <Grid item xs={12} md={4}  key={data.id}>
                <Card>
                  <CardHeader title={data.name} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={data.coverimage}
                    alt={data.name}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {data.detail}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
