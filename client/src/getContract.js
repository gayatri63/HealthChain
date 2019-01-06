import web3 from './web3';

var abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_patientAddress",
        "type": "address"
      },
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_age",
        "type": "uint256"
      },
      {
        "name": "_contact",
        "type": "uint256"
      },
      {
        "name": "_userAddress",
        "type": "string"
      }
    ],
    "name": "setPatient",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_patientid",
        "type": "uint256"
      },
      {
        "name": "_healthCareAddress",
        "type": "address"
      },
      {
        "name": "_drugname",
        "type": "string"
      },
      {
        "name": "_timestamp",
        "type": "string"
      }
    ],
    "name": "setPrescription",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_patientid",
        "type": "uint256"
      },
      {
        "name": "_chainAddress",
        "type": "address"
      },
      {
        "name": "_drugname",
        "type": "string"
      },
      {
        "name": "_timestamp",
        "type": "string"
      },
      {
        "name": "_totalcost",
        "type": "uint256"
      }
    ],
    "name": "setReceipt",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_patientid",
        "type": "uint256"
      },
      {
        "name": "_chainAddress",
        "type": "address"
      },
      {
        "name": "_timestamp",
        "type": "string"
      },
      {
        "name": "_disease",
        "type": "string"
      }
    ],
    "name": "setRecord",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "patientAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "age",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "contact",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "userAddress",
        "type": "string"
      }
    ],
    "name": "addPatient",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "prescriptionid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "healthCareAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "drugname",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "string"
      }
    ],
    "name": "addPrescription",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "recordid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "disease",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "chainAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "string"
      }
    ],
    "name": "addRecord",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "receiptid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "chainAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "drugname",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "totalcost",
        "type": "uint256"
      }
    ],
    "name": "addReceipt",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "drugid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "drugname",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "count",
        "type": "uint256"
      }
    ],
    "name": "addDrug",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getPatient",
    "outputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPatientCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_patientid",
        "type": "uint256"
      },
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getPrescription",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_patientid",
        "type": "uint256"
      },
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getReceipt",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_patientid",
        "type": "uint256"
      },
      {
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getRecord",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "patientCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "patientsList",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]

var address = '0x6de75bf6e9548b85ff2ca2c6b3e5ca33b5bab5fd';

export default new web3.eth.Contract(abi,address);
