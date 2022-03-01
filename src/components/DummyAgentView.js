import React from 'react';
import { withTaskContext, Actions } from '@twilio/flex-ui';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class DummyAgentView extends React.Component {

      render() {

        var screenpop = { 
        "screenPopTitle": "Live Chat - Delivery Enroute",
        "screenPopSubtitle": "Delivery Partner - Mark Hannan",
        "screenPopFields": [
          {
            "key": "Customer Name",
            "value": "Addie LaRue"
          },
          {
            "key": "Customer Phone - (click-to-call)",
            "value": "+61424626630"
          },
          {
            "key": "Email Address",
            "value": "addielarue@gmail.com"
          },
          {
            "key": "Delivery Address",
            "value": "127 Railway Pde"
          },
          {
            "key": "Suburb",
            "value": "Erskineville"
          },
          {
            "key": "City",
            "value": "Sydney"
          },
          {
            "key": "Member ID",
            "value": "78972552"
          }
        ]
      }


        return (
          <div style={{background: "#f4f4f4", minHeight: "100vh"}}>
            <div class="row">
              <div class="col">
                <div class="row"> 
                  
                    <div class="card" style={{ minWidth: "500px", maxWidth: "500px", minHeight:"425px",  marginLeft: "20px", marginTop: "20px"}}>
                      <div style={{background: "#96CEB4", color: "#FFFFFF", display: 'flex', justifyContent: "center",}}>
                        <h5>Customer Information</h5>
                      </div>
                      <div class="collection" >                    
                      { screenpop.screenPopFields.map((fields) => {
                          if(fields.key == "Customer Phone - (click-to-call)"){
                            return (<a href="#!" class="collection-item" onClick={() => {Actions.invokeAction("StartOutboundCall", {destination: fields.value});} }><span class="badge">{fields.value}</span><Typography variant='body1'>{fields.key}</Typography></a>)
                          } else {
                            return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span><Typography variant='body1'>{fields.key}</Typography></a>)  
                          }
                        })}
                      </div>
                    </div>
                  
                </div>
                <div class="row">
                  <div class="card" style={{minWidth: "500px", maxWidth: "500px", minHeight:"425px", marginLeft: "20px"}}>
                    <div style={{background: "#96CEB4", color: "#FFFFFF", display: 'flex', justifyContent: "center",}}>
                      <h5>Order Summary</h5>
                    </div>
                    <div style={{paddingLeft: "40px"}}>
                      <h5>Order Number: 0764582</h5>
                      <h6>Number of items in order: 3</h6>
                      <h6>Total Cost: $78.95</h6>
                      <h6>Shipping method: Domestic - Express</h6>
                      <span style={{display: 'flex', flexDirection: 'row'}}><h6>Delivery Status: </h6> <h6 style={{color: '#D9534F'}}>Out for Delivery</h6></span>
                      <h6>Estimated Arrival: 28/02/2022</h6>
                      <h6>Tracking ID: 2298572291002 - AUS POST</h6>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', minWidth: '500px', justifyContent: 'space-evenly', marginTop: '40px'}}>
                      <Button variant="contained" color="secondary"> Order Details</Button>
                      <Button variant="contained" color="secondary"> Track Order</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row">             
                  <div class="card" style={{minWidth: "800px", maxWidth: "800px", minHeight:"425px",  marginLeft: "35px", marginTop: "20px"}}>
                    <div style={{background: "#96CEB4", color: "#FFFFFF", display: 'flex', justifyContent: "center",}}>
                      <h5>Most Recent Purchase</h5>
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                      <div class="card-image">
                        <img style={{marginTop: "30px", alignSelf: "left", maxWidth: "400px", minWidth: "400px"}} src="https://bazaar-falcon-7238.twil.io/assets/blocks.jpg"/>
                      </div>
                      <div>
                       <h5 style={{color: '#D9534F'}}>Wooden Alphabet - 24pc Set</h5>
                       <h5>$28</h5>
                       <h6>This wooden alphabet letters 24 piece blocks set is a great value and perfect activity to encourage letter recognition, hand-eye coordination and imagination skills. Perfect Toddler gift. Encouraging problem solving skills, learning cause and effect, and large and fine motor development.Made from quality wood and finished in beautifully modern coloured paints.</h6>
                       <h5 style={{color: '#96CEB4'}}>15 in stock in warehouse</h5> 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="card" style={{minWidth: "800px", maxWidth: "800px", minHeight:"425px", marginLeft: "35px"}}>
                    <div style={{background: "#96CEB4", color: "#FFFFFF", display: 'flex', justifyContent: "center",}}>
                      <h5>Similar Items</h5>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                      <div class="card-image" style={{display: 'flex', flexDirection:'column', alignItems:"center"}}>
                        <span style={{display:'flex', flexDirection: 'row'}}><h6 style={{color: "#D9534F"}}>8pc Wooden Animals </h6><h6> - $35</h6></span>
                        <img style={{marginTop: "10px", marginBottom: "20px", maxWidth: "200px", minWidth: "200px", minHeight:'250px'}} src="https://bazaar-falcon-7238.twil.io/assets/africa-group-border.png"/>
                        <Button variant='contained' color='secondary'>Order</Button>
                      </div>
                      <div class="card-image" style={{display: 'flex', flexDirection:'column', alignItems:"center"}}>
                      <span style={{display:'flex', flexDirection: 'row'}}><h6 style={{color: "#D9534F"}}>Jnr Corner Blocks </h6><h6> - $18</h6></span>
                        <img style={{marginTop: "10px", marginBottom: "20px", maxWidth: "200px", minWidth: "200px", minHeight:'250px'}} src="https://bazaar-falcon-7238.twil.io/assets/BAUSPIELCORNERBLOCKS2-e1603259814444.png"/>
                        <Button variant='contained' color='secondary'>Order</Button>
                      </div>
                      <div class="card-image" style={{display: 'flex', flexDirection:'column', alignItems:"center"}}>
                      <span style={{display:'flex', flexDirection: 'row'}}><h6 style={{color: "#D9534F"}}>Animal Shapes</h6><h6> - $22</h6></span>
                        <img style={{marginTop: "10px", marginBottom: "20px", maxWidth: "200px", minWidth: "200px", minHeight:'250px'}} src="https://bazaar-falcon-7238.twil.io/assets/animabasic-animal-shape.jpeg"/>
                        <Button variant='contained' color='secondary'>Order</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            );
    }
}

export default withTaskContext(DummyAgentView);
