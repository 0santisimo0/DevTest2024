import { Box, Button, Container, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { usePoll } from '../hooks/usePoll';
import { useNavigate } from 'react-router-dom';
import PollCard from '../components/PollCard';
import { createPoll } from '../services/pollService';
import { toast, ToastContainer } from 'react-toastify';

const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const {data: polls, isLoading, error} = usePoll();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [firstOption, setFirstOption] = useState<string>("");
    const [secondOption, setSecondOption] = useState<string>("");

    const [newPollName, setPollName] = useState<string>("");
    const navigate = useNavigate();

    
    const handleGoVotePage = (id: string) => {
        navigate(`/v1/polls/${id}`);
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading polls</p>;

    // useEffect(() => {
    //     const getPolls = async () => {
    //         const pollsFetch = await usePoll();
    //         if (pollsFetch) {
                
    //         }
    //     }
    // }, [])
    

    const handleAddPoll = async () => {
        await createPoll({name: newPollName, options: [{name: firstOption}, {name: secondOption}], votes: []});
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

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "5rem",
        background: "#fff"
      }}
    >
    <Paper
        sx={{
          width: "500px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center"
        }}
        elevation={10}
      >


        <div className="d-flex justify-content-right">
        <Button onClick={handleOpen}>Add Poll</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
                 Name
                </Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={() => setPollName}  />

                <Typography id="modal-modal-title" variant="h6" component="h2">
                 Write The options
                </Typography>

                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={() => setFirstOption} />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={() => setSecondOption}  />

                <Button onClick={handleAddPoll}>Save</Button>

            </Box>
            </Modal>
        </div>


                <Typography className='mt-4' variant="h3" color="primary">
          Polls
        </Typography>

        <div>
            {
                polls?.map((poll) => (
                    <PollCard
                        key={poll.id}
                        id={poll.id}
                        title={poll.name}
                        options={poll.options}
                    />
                )
                )
            }
        </div>
      </Paper>
      <ToastContainer/>
    </Container>
  )
}

export default Home