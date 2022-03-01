import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'

const overlayStyle = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        minWidth: "375px",
        maxWdith: "375px",      
    },
}

const StyledButton = withStyles({
    root: {
      background: 'rgb(189,162,88)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 40,
      width: 250,
      padding: '0 30px',
      marginLeft: 80
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

class TabComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.sendAuthy = this.sendAuthy.bind(this);

        this.state = {
            date: "12-Oct-2021",
            addressee: "Michael Bloomfield",
            value: "",
            disputed: false,
            acknowledged: false
          }
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.id]: event.target.value})
    }
    handleChecked(event) {
        this.setState({...this.state, [event.target.name]: event.target.checked})
    }
    sendAuthy() {
        //your runtime domain goes below
        axios.get(`https://bazaar-falcon-7238.twil.io/authyRequest?TaskSid=${this.props.task.source.sid}`);
    }

    

      render() {

        return (
            <div style={overlayStyle.container}>                
                <TextField
                    id="date"
                    label="Booking Date"
                    style={{ margin: 8 }}
                    placeholder="12-Oct-2021"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.state.date}
                    onChange={this.handleChange}
                />
                <TextField
                    id="addressee"
                    label="Booking Name"
                    style={{ margin: 8 }}
                    placeholder="Mark Hannan"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.state.addressee}
                    onChange={this.handleChange}
                />
                <TextField
                    id="value"
                    label="Table size"
                    style={{ margin: 8 }}
                    placeholder="eg 4 adults, 2 children"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.disputed}
                            onChange={this.handleChecked}
                            name="disputed"
                            color="primary"
                        />
                    }
                    label="Charge to Room Booking"
                />
                
                <StyledButton variant="outlined" color="secondary" onClick={() => {alert("Claim Lodged")}}>Lodge Booking</StyledButton>
            </div>
        )
        }      

}

export default withTaskContext(TabComponent);

