import React, {Component} from 'react';
import Button from '@mui/material/Button';
import LoginForm from "./LoginForm";

class ButtonOpen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false
        };
        this.onOpen = this.onOpen.bind(this);
    }
    onOpen() {
        this.setState(state => ({
            open: !state.open
        }));
    }

    render() {
        if (this.state.open) {
        return (
            <React.Fragment>
                <div>
                    <LoginForm open={this.state.open} onClose={this.onOpen}/>
                 </div>
            </React.Fragment>
        );
    }
        else {
            return (
                <React.Fragment>
                    <div>
                        <Button onClick={this.onOpen}
                            color="secondary"
                            disabled={false}
                            size="large"
                            variant="contained"
                            sx={{ width: 400,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                bgcolor: '#814DDE'
                            }}>Войти</Button>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default ButtonOpen;