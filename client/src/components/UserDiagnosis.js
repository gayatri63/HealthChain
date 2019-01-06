import React, {Component} from 'react';
import { Well, Col, Row } from 'react-bootstrap'
import './UserComponents.css'

class UserDiagnosis extends Component {

    constructor(){
        super();
        this.state = {}
    }


    render() {
        const data = this.props.data
        const reportList = data.map(d => <Well sm={12} key={d[0]} className="history"><Row><Col sm={4}>{ d[2] }</Col><Col sm={4}>Grey Sloan Memo</Col><Col sm={4}>{ d[3] }</Col></Row></Well>)
        return (
            <div>
                <Well sm={12} className="history headings"><Row><Col sm={4}>Diagnosis</Col><Col sm={4}>Hospital</Col><Col sm={4}>Date</Col></Row></Well>
                { reportList }
            </div>
        );
    }
}

export default UserDiagnosis;