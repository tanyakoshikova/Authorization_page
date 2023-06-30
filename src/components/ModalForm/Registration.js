import React, {useState} from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import {DialogActions, Typography, DialogTitle, DialogContent, Grid, IconButton} from "@mui/material";
import {FormControl, InputLabel, Input, InputAdornment} from "@mui/material";
import {VisibilityOff} from "@mui/icons-material";
import {RadioGroup, FormLabel, FormControlLabel, Radio} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const Registration = () => {

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
                    sx={{ pl: 3,
                        fontSize: 13}}
                >Регистрация</Link>
            </div>
            <Modal
                open={open}
                onClose={closeModal}
            >
                <Box sx={{ ...style}}>
                    <DialogTitle>
                        <Grid container>
                            <Grid><Typography sx={{fontWeight: 'bold', textAlign: 'center'}}>Регистрация</Typography></Grid>
                            <Grid ml="auto" item>
                                <IconButton aria-label="close" onClick={closeModal}>
                                    <CloseIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </DialogTitle>
                    <DialogContent>
                        <FormControl size={"small"} sx={{mt: 1}}>
                            <InputLabel>Имя</InputLabel>
                            <Input type='text'
                            />
                        </FormControl>
                        <FormControl size={"small"} sx={{mt: 1}}>
                            <InputLabel>Фамилия</InputLabel>
                            <Input type='text'
                            />
                        </FormControl>
                        <FormControl size={"small"} sx={{mt: 1}}>
                            <FormLabel>Пол</FormLabel>
                            <RadioGroup sx={{ color: '#666'}} >
                                <FormControlLabel value="female" control={<Radio />} label="Мужской" />
                                <FormControlLabel value="male" control={<Radio />} label="Женский" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl size={"small"} sx={{mt: 1}}>
                        <InputLabel>Придумайте логин</InputLabel>
                            <Input label="email" type="email" />
                        </FormControl>
                        <FormControl size={"small"} sx={{mt: 1}}>
                            <InputLabel size={"small"} sx={{mt: 1}}>Придумайте пароль</InputLabel>
                            <Input label="password"
                                type='password'
                                endAdornment={
                                    <InputAdornment position="end"><VisibilityOff/></InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl size={"small"} sx={{mt: 1}}>
                            <InputLabel>Номер телефона</InputLabel>
                            <Input label="+7 (999) 000-00-00" type="tel" />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeModal}
                                color="secondary"
                                disabled={false}
                                size="small"
                                variant="outlined"
                                fullWidth
                        >Создать</Button>
                    </DialogActions>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default Registration;