import React, {Component} from 'react';
import ButtonOpen from "./ButtonOpen";

class Profile extends Component {

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
            return (
                <React.Fragment>
                    <div>
                        <ButtonOpen onClick={this.state.onOpen}/>
                    </div>
                </React.Fragment>
            );
    }
}

export default Profile;