import { Card, CardMedia, CardContent, Typography, CardActions, Button, Modal, Box, TextField } from "@mui/material";
import React from "react";
import { PollOption } from "../interfaces/interfaces";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  title: string;
  options: PollOption[];
  onViewDetails?: (id: string) => void;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const PollCard: React.FC<ProductCardProps> = ({ id, title, options, onViewDetails }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleVote = () => {
        
    }

  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }} elevation={5}>
      <CardContent>
        <div className="d-flex justify-content-right">
        <Button onClick={handleOpen}>Vote</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>

                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                <Typography id="modal-modal-title" variant="h6" component="h2">
                Make Your Vote
                </Typography>

                {
                    options?.map((option)=> (
                        <Button variant="outlined" onClick={handleVote}>
                            <div>
                                {option.name}
                                <p>{option.votes}</p>
                            </div>
                        </Button>
                    ))
                }
            </Box>
            </Modal>
        </div>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        {
            options?.map((option)=> (
                <div>
                    {option.name}
                    <p>{option.votes}</p>
                </div>
            ))
        }
      </CardContent>
      <CardActions>
        {
            onViewDetails &&
            <Button variant="contained" size="small" color="primary" onClick={() => onViewDetails(id)}>
            Ver Detalles
            </Button>
        }
      </CardActions>
    </Card>
  );
};

export default PollCard;
