import React from 'react';
import { Checkmark } from 'react-checkmark'
import Cards from 'react-credit-cards';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'react-credit-cards/es/styles-compiled.css'

const overlayStyle = {
    card: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: "5vh",
        paddingTop: "5vh",
        paddingLeft: "25px",
        justifyContent: "space-around",
        alignContent: "center",
        minWidth: "350px",
        maxWdith: "350px",      
    },
    controls: {
        display: "flex",
        flexDirection: "row",
        paddingBottom: "5vh",
        paddingTop: "5vh",
        paddingLeft: "25px",
        justifyContent: "space-around",
        alignContent: "space-around",
        minWidth: "350px",
        maxWdith: "350px",      
    },
    complete: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: "8vh",
        paddingTop: "4vh",
        paddingLeft: "25px",
        justifyContent: "center",
        alignContent: "center",
        minWidth: "350px",
        maxWdith: "350px",      
    }
}
 
export default class PayComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentCardNumber: "************1111",
            securityCode: "123",
            expirationDate: "12/20",
            paymentToken: "1a5efc869898ca",
            focused: 'name',
            issuer: "MasterCard",
            captureComplete: false
          }
    }
 
  render() {
    if(this.state.captureComplete == false){  
        return (
            <div style={overlayStyle.card}>
                <div id="PaymentForm">
                    <Cards
                    cvc={this.state.securityCode}
                    expiry={this.state.expirationDate}
                    focused={this.state.focused}
                    name="Addie LaRue"
                    preview={true}
                    issuer={this.state.issuer}
                    number={this.state.paymentCardNumber}
                    />
                </div>
                <div style={overlayStyle.controls}>
                <TextField
                style={{maxWidth: "100px", alignSelf: 'center'}} 
                // variant='outlined'
                value='$78.95'
                label='Payment Amount'
                />
                <Button variant='contained' color='Secondary' style={{alignSelf: 'center'}} onClick={() => this.setState({...this.state, captureComplete: true})}> Process </Button>
                </div>
            </div>
        );
    } else {
        return (
            <div style={overlayStyle.complete}>
                <Checkmark size='128px' color='green' />
                <h6 style={{color: "green", alignSelf: "center", paddingBottom: '10vh'}}>Payment token: {this.state.paymentToken}</h6>
                <h4>Payment Processed</h4>
            </div>
        );
    }
  }
}