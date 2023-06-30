import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {DialogContent, DialogTitle, Grid, IconButton, TextField, Typography, ListItemButton, Link} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {MailOutline} from "@mui/icons-material";
import ButtonOpen from "./ButtonOpen";
import Registration from "./ModalForm/Registration";
import ForgotPassword from "./ModalForm/ForgotPassword";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 800,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 5,
};

function LoginForm({open, onClose}) {

        if (open) {
            return (
                    <React.Fragment>
                        <Modal
                        open={open}
                        onClose={onClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description" >
                            <Box sx={style}>
                                <DialogTitle>
                                    <Grid container>
                                        <Grid><Typography sx={{fontWeight: 'bold', mr: 1, fontSize: 30}}>Web</Typography></Grid>
                                        <Grid><Typography sx={{fontWeight: 'light', fontSize: 30}}>App</Typography></Grid>
                                        <Grid ml="auto" item>
                                            <IconButton aria-label="close" onClick={onClose}>
                                                <CloseIcon/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    <Typography sx={{fontWeight: 'bold', mt: 8}}>Войдите в свой профиль</Typography>
                                </DialogTitle>
                                <DialogContent>
                                    <Typography sx={{mt: 2, mb: 1, fontSize: 13}}>Логин</Typography>
                                    <TextField
                                    size="small"
                                    label="konst.konst.konst@yandex.ru"
                                    type="email"
                                    fullWidth />
                                    <Typography sx={{mt: 4, mb: 1, fontSize: 13}}>Пароль</Typography>
                                    <TextField
                                    size="small"
                                    title="Логин"
                                    label="konst.konst.konst@yandex.ru"
                                    type="email"
                                    fullWidth />
                                    <Button onClick={open}
                                        color="secondary"
                                        disabled={false}
                                        size="small"
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: 6,
                                            height: 40,
                                            borderRadius: 20 }}>Войти</Button>
                                </DialogContent>
                                <ForgotPassword/>
                                <Registration/>
                                <ListItemButton
                                disabled={false}
                                sx={{ mt: 10, ml: 3,
                                    fontSize: 12,
                                    color: '#8F8FA3'}} >
                                    <MailOutline sx={{ mr:1 }} /> Написать в поддержку
                                </ListItemButton>
                            </Box>
                        </Modal>
                    </React.Fragment>
            );
        }
        else {
            return (
                    <ButtonOpen onClick={open}/>
            )
        }

    }
// }

export default LoginForm;