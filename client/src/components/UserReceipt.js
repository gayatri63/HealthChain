import React, {Component} from 'react';
import { Well, Col, Row } from 'react-bootstrap'
import './UserComponents.css'

class UserReceipt extends Component {
    constructor(){
        super();
        this.state = {}
    }

    render() {
        const data = this.props.data
        const receiptList = data.map(d => <Well sm={10} key={d[0]} className="history"><Row><Col sm={2} smOffset={1}>{ d[0] }</Col><Col sm={2}>Grey Sloan Memo</Col><Col sm={2}>{ d[3]}</Col><Col sm={2}>Rs. { d[4] }</Col><Col sm={2}>{ d[2] }</Col></Row></Well>)
        return (
            <div>
                <Well sm={10} className="history headings"><Row><Col sm={2} smOffset={1}>Receipt. No.</Col><Col sm={2}>Hospital</Col><Col sm={2}>Drug Name</Col><Col sm={2}>Total Cost</Col><Col sm={2}>Date</Col></Row></Well>
                { receiptList }
            </div>
        );
    }
}

export default UserReceipt;