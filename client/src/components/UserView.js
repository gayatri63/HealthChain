import React, {Component} from 'react';
import { Grid, Jumbotron, Button, Row, Col, Tabs, Tab } from 'react-bootstrap'
import './UserView.css'
import UserDiagnosis from './UserDiagnosis'
import UserPrescription from './UserPrescription'
import UserReceipt from './UserReceipt'
import web3 from '../web3';
import getContract from '../getContract';
// import Chart from 'react-google-charts';


class UserView extends Component {
    constructor(){
        super()
        this.state = {
            reportData: [],
            prescriptionData: [],
            receiptData: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.newRep = this.newRep.bind(this)
        this.newPres = this.newPres.bind(this)
    }


    async newRep(e){
      e.preventDefault()
      //awaits se send.
      //setState of diseaseData. Get diseaseData using await
      let patient = await getContract.methods.getCount(1).call();
          
        let recordsCount = patient[0];
        let patientList = [];
          // const mydata = await healthCare.methods.getPatient(0).call();
          for(let i=0;i<=recordsCount;i++) {
            let records = await getContract.methods.getRecord(1,i).call();
            patientList.push(records);
            this.setState({reportData: patientList});
           
          }
        this.setState({reportData: patientList});
  }

  async newPres(e){
      e.preventDefault()
      //awaits se send.
      //setState of diseaseData. Get diseaseData using await
      let patient = await getContract.methods.getCount(1).call();
          
        let prescCount = patient[1];
          let prescList = [];
          // const mydata = await healthCare.methods.getPatient(0).call();
          for(let i=0;i<=prescCount;i++) {
            let presc = await getContract.methods.getPrescription(1,i).call();
            prescList.push(presc);
            this.setState({prescriptionData: prescList});
            console.log(presc);
          }
          this.setState({prescriptionData: prescList});
  }

  async newRec(e){
      e.preventDefault()
      //awaits se send.
      //setState of diseaseData. Get diseaseData using await
      let patient = await getContract.methods.getCount(1).call();
          
        let recordsCount = patient[0];
        let patientList = [];
          // const mydata = await healthCare.methods.getPatient(0).call();
          for(let i=0;i<=recordsCount;i++) {
            let records = await getContract.methods.getRecord(1,i).call();
            patientList.push(records);
            this.setState({reportData: patientList});
           
          }
        this.setState({reportData: patientList});
  }


    async componentDidMount(){
        //setState of diseaseData. Get diseaseData using await.
        let patient = await getContract.methods.getCount(1).call();
        this.setState({receiptData: [{"no": 1, "total": 1732, "hospital": "Grey Sloan Memorial", "drug": "Crocin","date": "12/02/18"}, {"no": 5, "total": 138, "hospital": "Sion hospital", "drug": "D-Cold", "date": "12/02/18"}]})
        this.setState({prescriptionData: [{"no": 1, "name": "Crocin", "quantity": 10, "hospital": "Sion hospital", "date": "12/02/18"}, {"no": 3, "name": "D-cold","quantity": 10, "hospital": "Grey Sloan Memorial", "date": "12/02/18"}]})
        let recordsCount = patient[0];
        let patientList = [];
          // const mydata = await healthCare.methods.getPatient(0).call();
          for(let i=0;i<=recordsCount;i++) {
            let records = await getContract.methods.getRecord(1,i).call();
            patientList.push(records);
            this.setState({reportData: patientList});
           
          }
          this.setState({reportData: patientList});

          let prescCount = patient[1];
          let prescList = [];
          // const mydata = await healthCare.methods.getPatient(0).call();
          for(let i=0;i<=prescCount;i++) {
            let presc = await getContract.methods.getPrescription(1,i).call();
            prescList.push(presc);
            this.setState({prescriptionData: prescList});
            console.log(presc);
          }
          this.setState({prescriptionData: prescList});

        
        this.setState({receiptData: [{"no": 1, "total": 1732, "hospital": "Grey Sloan Memorial", "date": "Purana1"}, {"no": 5, "total": 138, "hospital": "Grey Sloan Memorial", "date": "Purana2"}]})
    }

    render() {
        return (
            <Grid>
                <Jumbotron className="jumbotron">
                    <h2 className="name">Mojo Jojo</h2>
                    <Col className="JTD" smOffset={3}><span className="JTE">Address: </span>New York, NY, United States</Col>
                    <Col className="JTD" smOffset={3}><span className="JTE">Contact: </span>+91-8655561191</Col>
                </Jumbotron>
                <Tabs defaultActiveKey={1} id="options">
                    <Tab eventKey={1} title="View Reports or Diagonosis" onClick={this.newRep}>
                        <UserDiagnosis data={ this.state.reportData }/>
                    </Tab>
                    <Tab eventKey={2} title="View Prescriptions">
                        <UserPrescription data={this.state.prescriptionData}/>
                    </Tab>
                    <Tab eventKey={3} title="View Receipts">
                        <UserReceipt data={this.state.receiptData}/>
                    </Tab>
                </Tabs>
            </Grid>
        );
    }
}

export default UserView;