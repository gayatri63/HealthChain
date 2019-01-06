import React, {Component} from 'react';
import { Well, Col, Row } from 'react-bootstrap'
import './UserComponents.css'

class UserPrescription extends Component {

    constructor(){
        super()
        this.state = {}
    }

    render() {
        const data = this.props.data
        const prescriptionList = data.map(d => <Well sm={10} key={d.no} className="history"><Row><Col sm={2} smOffset={1}>{ d.no }</Col><Col sm={2}>{ d.name }</Col><Col sm={2}>{ d.quantity }</Col><Col sm={2}>{ d.hospital }</Col><Col sm={2}>{ d.date }</Col></Row></Well>)
        return (
            <div>
                <Well sm={10} className="history headings"><Row><Col sm={2} smOffset={1}>Pres. No.</Col><Col sm={2}>Drug Name</Col><Col sm={2}>Quantity</Col><Col sm={2}>Hospital</Col><Col sm={2}>Date</Col></Row></Well>
                { prescriptionList }
            </div>
        );
    }
}

export default UserPrescription;