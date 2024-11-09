import { Container, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Poll } from '../interfaces/interfaces';

const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [polls, setPolls] = useState<Poll[]>();
    

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        paddingTop: "5rem"
      }}
    >
    <Paper
        sx={{
          height: "600px",
          width: "500px",
          display: "flex",
          justifyContent: "center",
        }}
        elevation={10}
      >
        <Typography className='mt-4' variant="h3" color="primary">
          Polls
        </Typography>
      </Paper>
    </Container>
  )
}

export default Home