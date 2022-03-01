import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';

class PhotoComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <img style={{margin: '1px', maxWidth: "400px", minWidth: "400px"}} src="https://ccwocr.blob.core.windows.net/characters/test.png"/>
            </div>
        )
    }      
}

export default withTaskContext(PhotoComponent);

