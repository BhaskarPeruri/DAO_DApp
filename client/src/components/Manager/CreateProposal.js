import "./manager.css"
function CreateProposal({state,account}){

    async function proposalCreation(event){
        try{
            event.preventDefault();//assists in preventing page refresh
            const {contract} =state;//fetching contract from the state
            const description = document.querySelector("#description").value;
            const amount = document.querySelector("#amount").value;
            const recipient = document.querySelector("#recipient").value;
            //writing into the blockchain
            await contract.methods.createProposal(description,amount,recipient).send({from:account,gas:480000});
            //send is used because of writing into the blockchain and for reading we use call.
            //while changing in blockchian, it costs money so  mentioned account and gas.
            //console.log(description,amount, recipient);
        }
        catch(error){
            alert(error)
        }
        window.location.reload()

    }
   
    return<><div id="myForm" >
    <label className="label1" htmlFor="name">
    <span className="font">Description:</span>
    </label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="description" placeholder="Description for the proposal"></input><br></br>
    <label className="label1" htmlFor="amount">
    <span className="font">Amount(in Wei):</span>
        </label>
        &nbsp;<input type="text" id="amount" placeholder="Enter amount"></input><br></br>
    <label className="label1" htmlFor="recipient">
    <span className="font">Recipient Address:</span>
        </label>
    <input type="text" id="recipient" placeholder="recipient address"></input><br></br>
    <br></br>
    <button className="button"  type="button" onClick={proposalCreation}>Create Proposal</button>
    </div><br></br></>
    
   }
   export default CreateProposal;