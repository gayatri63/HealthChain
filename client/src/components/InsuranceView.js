import React, {Component} from 'react';
import { Grid, Jumbotron, Button, Row, Col, FormControl, FormGroup } from 'react-bootstrap'
import ControlLabel from "react-bootstrap/es/ControlLabel";
import UserReceipt from './UserReceipt'
import web3 from '../web3';
import getContract from '../getContract';

class InsuranceView extends Component {
    constructor(){
        super()
        this.state = {
            id: "",
            receiptData: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.newSub = this.newSub.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    async newSub(e){
        e.preventDefault()
            //awaits se send.
            //setState of receiptData. Get receiptData using await
        let count = await getContract.methods.getCount(this.state.id).call();
          
        let receiptsCount = count[0];
        let receiptList = [];
          // const mydata = await healthCare.methods.getPatient(0).call();
        for(let i=0;i<=receiptsCount;i++) {
            let records = await getContract.methods.getReceipt(this.state.id,i).call();
            receiptList.push(records);
            this.setState({receiptData: receiptList});
         
        }
        this.setState({receiptData: receiptList});
    }

    render() {
        return (
            <Grid>
                <Jumbotron className="jumbotron">
                    <h2 className="name">DEI</h2>
                    <Col className="JTD" smOffset={3}><span className="JTE">Address: </span>New York, NY, United States</Col>
                    <Col className="JTD" smOffset={3}><span className="JTE">Contact: </span>+91-8655561191</Col>
                    <Col className="JTD" smOffset={3}><span className="JTE">Patients: </span>10</Col>
                </Jumbotron>
                <Row>
                    <Col sm={6} smOffset={3}>
                        <form method="post" action="">
                            <input type="hidden" value={this.state.id}/>
                            <FormGroup controlId="patients">
                                <ControlLabel>ID of Patient</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.id}
                                    placeholder="Enter"
                                    onChange={this.handleChange}
                                    name="id"
                                />
                            </FormGroup>
                            <Button type="submit" onClick={this.newSub}>Submit</Button>
                        </form>
                    </Col>
                </Row>
                <Col className="receipt">
                    <UserReceipt data={this.state.receiptData}/>
                </Col>
            </Grid>
        );
    }
}

export default InsuranceView;