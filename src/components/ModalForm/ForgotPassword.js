import React, {useState} from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import {DialogActions, Typography, DialogTitle, DialogContent, TextField, IconButton, Grid} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const ForgotPassword = () => {

    const [open, setOpen] = useState(false);
    const openModal = () => { setOpen(true); };
    const closeModal = () => { setOpen(false); };

    return (
        <React.Fragment>
            <div>
                <Link
                    onClick={openModal}
                    component="button"
                    variant="body2"
                    underline="hover"
                    sx={{ mt: 4,
                        mb: 2,
                        pl: 3,
                        fontSize: 13}}
                >Я забыл пароль</Link>
            </div>
            <Modal
                open={open}
                onClose={closeModal}
            >
                <Box sx={style}>
                    <DialogTitle>
                        <Grid container>
                            <Grid><Typography sx={{fontWeight: 'bold', pr: 5, height:0}}>Введите номер телефона, который привязан к вашему аккаунту</Typography></Grid>
                            <Grid ml="auto" item>
                                <IconButton aria-label="close" onClick={closeModal}>
                                    <CloseIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            type="tel"
                            size="small"
                            label="+7 (999) 000-00-00"
                            fullWidth
                            sx={{mt: 1}}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeModal}
                                color="secondary"
                                disabled={false}
                                size="small"
                                variant="outlined"
                                fullWidth
                        >Далее</Button>
                    </DialogActions>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default ForgotPassword;