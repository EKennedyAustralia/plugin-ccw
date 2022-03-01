import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import DummyAgentView from './DummyAgentView';


class PanelSwitcher extends React.Component {

      render() {
        
        if(this.props.task === undefined) {
          return (
            <div style={{display: "flex", background: "#ffffff", minHeight: "100vh", paddingLeft: "20px", alignItems: "center", justifyContent: "center"}}>
              <img style={{ maxWidth: "37vw", minWidth: "37vw", maxHeight: "60vh"}} src="https://bazaar-falcon-7238.twil.io/assets/babyOwl.jpeg"></img>
            </div>
            // <DummyAgentView />
            
          );
        }

        else {
          return (

            <DummyAgentView />
          );
        }
    }
}

export default withTaskContext(PanelSwitcher);
