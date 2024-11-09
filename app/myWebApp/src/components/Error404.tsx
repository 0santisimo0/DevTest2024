import { Container, Paper, Typography } from "@mui/material";

const Error404 = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
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
        <Typography variant="h3" textAlign="center" color="primary">
          Error 404
        </Typography>
      </Paper>
    </Container>
  );
};

export default Error404;
