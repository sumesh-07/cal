if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    try {
        // ask user for permission
        ethereum.enable()
        // user approved permission
    } catch (error) {
        // user rejected permission
        console.log('user rejected permission')
    }
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
    // no need to ask for permission
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
  console.log (window.web3.currentProvider)

  var contractAddress ="0x5f5BbBC37f0F9C1470525eE0b097b833bFD80AAF";
  var abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        }
      ],
      "name": "getFirstNum",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "getSecNum",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "add",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "div",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mul",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sub",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

contract = new web3.eth.Contract(abi, contractAddress);


var account;
  
web3.eth.getAccounts(function(err, accounts) {
  if (err != null) {
    alert("Error retrieving accounts.");
    return;
  }
  if (accounts.length == 0) {
    alert("No account found! Make sure the Ethereum client is configured properly.");
    return;
  }
  account = accounts[0];
  console.log('Account: ' + account);
  web3.eth.defaultAccount = account;
});

/*function getfirstNum() {
  info = $("#getfitstNum").val();
  contract.methods.getfirstNum(info).send( {from: account}).then( function(tx) { 
    console.log("Transaction: ", tx); 
  });
  $("#getfirstNum").val('');
}

function getsecNum() {
  info = $("#getsecNum").val();
  contract.methods.getsecNum (info).send( {from: account}).then( function(tx) { 
    console.log("Transaction: ", tx); 
  });
  $("#getsecNum").val('');
}

function add() {
  contract.methods.add().call().then( function( info ) { 
    console.log("info: ", info);
    document.getElementById('output').innerHTML = info;
  });     
  }*/

 
  function first() {
    info = $("#fir").val();
    contract.methods.getFirstNum(info).send( {from: account}).then( function(tx) { 
      console.log("Transaction: ", tx); 
    });
    $("#fir").val('');
  }

  function second() {
    info = $("#sec").val();
    contract.methods.getSecNum(info).send( {from: account}).then( function(tx) { 
      console.log("Transaction: ", tx); 
    });
    $("#sec").val('');
  }


function getaddition() {
  contract.methods.add().call().then( function( info ) { 
    console.log("info: ", info);
    document.getElementById('output').innerHTML = info;
  });     
  }

  function getsubtraction() {
    contract.methods.sub().call().then( function( info ) { 
      console.log("info: ", info);
      document.getElementById('output').innerHTML = info;
    });     
    }

    function getmul() {
      contract.methods.mul().call().then( function( info ) { 
        console.log("info: ", info);
        document.getElementById('output').innerHTML = info;
      });     
      }

      function getdiv() {
        contract.methods.div().call().then( function( info ) { 
          console.log("info: ", info);
          document.getElementById('output').innerHTML = info;
        });     
        }