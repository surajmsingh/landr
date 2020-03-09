import "/css/Landr.css";
import { default as contract } from 'truffle contract';
import { default as Web3} from 'web3';
var landrABI;
var landrContract;
var landrCode;

window.App ={
  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.start();
  },
  start: function() {
    var self = this;
    web3.eth.getAccounts(function(err, accs){
      if (err != null) {
        alert("there was an error fetching your accountd.");
        return;
      }
      if (accs.length == 0) {
        alert("couldn't get any accounts! Make sure your Etherum is properly configured");
        return;
      }

      accounts = accs;
      account = accounts[0];
      web3.eth.defaultAccount= account;
      var landrsource=""; 
      web3.eth.compile.solidity(landrsource,function(error,landrcompiled){
        landrABI = landrcompiled['<stdin>:Landr'].info.abiDefinition;
        landrContract = web3.eth.contract(landrABI);
        landrCode = landrcompiled['<stdin>:Landr'].code;
      });
    });
  },
  createContract: function(){
    landrContract.now("",{from:account, data:landrCode,gas:30000},function(error,deployedContract){
      if(deployedContract.address){

      }
    });
  },
 
    addbuyer: function(){
      var b_fname = document.getElementById("b1").value;
      var b_sname = document.getElementById("b2").value;
      var b_addr = document.getElementById("b3").value;
      var b_post = document.getElementById("b4").value;
      var b_city = document.getElementById("b5").value;
      var b_pin = document.getElementById("b6").value;
      var b_adhaar = document.getElementById("b7").value;
      var b_ration = document.getElementById("b8").value;
      var b_pnum = document.getElementById("b9").value;
      deployedLandr.buyer(b_fname,b_sname,b_addr,b_post,b_city,b_pin,b_adhaar,b_ration,b_pnum,function(error){
        console.log(error);
      })

    },
    addseller: function(){
      var s_fname = document.getElementById("s1").value;
      var s_sname = document.getElementById("s2").value;
      var s_addr = document.getElementById("s3").value;
      var s_post = document.getElementById("s4").value;
      var s_city = document.getElementById("s5").value;
      var s_pin = document.getElementById("s6").value;
      var s_adhaar = document.getElementById("s7").value;
      var s_ration = document.getElementById("s8").value;
      var s_pnum = document.getElementById("s9").value;
      deployedLandr.seller(s_fname,s_sname,s_addr,s_post,s_city,s_pin,s_adhaar,s_ration,s_pnum,function(error){
        console.log(error);
      })

    },
    addland: function(){
      var l_date = document.getElementById("l1").value;
      var l_sfnum = document.getElementById("l2").value;
      var l_addr = document.getElementById("l3").value;
      var l_city = document.getElementById("l4").value;
      var l_pin = document.getElementById("l5").value;
      var l_nnorth = document.getElementById("l6").value;
      var l_nsouth = document.getElementById("l7").value;
      var l_neast = document.getElementById("l8").value;
      var l_nwest = document.getElementById("l9").value;
      var l_mnorth = document.getElementById("l10").value;
      var l_msouth = document.getElementById("l11").value;
      var l_meast = document.getElementById("l12").value;
      var l_mwest = document.getElementById("l13").value;
      var l_area = document.getElementById("l14").value;
      var l_rate = document.getElementById("l15").value;
      var l_tcost = document.getElementById("l17").value;
      deployedLandr.land(l_date,l_sfnum,l_addr,l_city,l_pin,l_nnorth,l_nsouth,l_neast,l_nwest,l_mnorth,l_msouth, l_meast,l_mwest,l_area,l_rate,l_tcost, function(error){
        console.log(error);
      })

    },
    add:function(){
      

    }


    

          
  
};

window.addEventListenr('load', function(){});