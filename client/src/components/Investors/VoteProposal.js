import "./investors.css"
function VoteProposal({state,account}){
    async function votePropose(event){
        try{
            event.preventDefault();
            const {contract} = state;
            const id = document.querySelector("#voteId").value;
            await contract.methods.voteProposal(id).send({from:account,gas:480000})
        }
        catch(error){
            alert(error)
        }
        window.location.reload()
    }
  
    return<><div id="myForm"> 
     <label className="label1" htmlFor="voteId">
     <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="voteId" placeholder="Enter Proposal Id"></input>
    <br></br>
    <br></br>
    <button className ="button" type="button" onClick={votePropose}>Vote</button>
    </div><br></br></>
   }
   export default VoteProposal;