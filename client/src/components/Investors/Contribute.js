import "./investors.css"
function Contribute({state,account}){
  async function contribute(event){
    try{
      event.preventDefault();
      const {contract} =state;
      const amount = document.querySelector("#contribute").value;
      await contract.methods.contribution().send({from:account, gas:480000,value:amount})
      //the contribution f'n is payable, so that we are using  value for sending the amount to contribute.
    }
    catch(error){
      alert(error)
    }
    window.location.reload()
  }
 return<>
 <div  id = "myForm" >
   <label className="label1" htmlFor="weiValue">
   <span className="font">Contribution Amount: </span>
        </label>
    <input type="text" id="contribute" placeholder="Enter amount for contribution" ></input>
    <br></br>
    <br></br>
    <button  className="button" type="button" onClick={contribute}>Contribute</button>
    </div>
    <br></br></>
}
export default Contribute;