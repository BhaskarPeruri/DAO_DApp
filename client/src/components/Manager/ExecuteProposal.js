import "./manager.css"
function ExecuteProposal({state,account}){
    async function proposalExecute(event){
        try{
            event.preventDefault();
            const {contract} = state;//fetching contract from the state
            const proposalId = document.querySelector("#pId").value;
            await contract.methods.executeProposal(proposalId).send({from:account,gas:480000})
        }
        catch(error){
            alert(error)
        }
        window.location.reload()
    }
    return<><div id="myForm" >
    <label className="label1" htmlFor="proposalId">
    <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="pId" placeholder="only manager can execute"></input>
    <br></br>
    <br></br>
    <button className="button"  type="button" onClick={proposalExecute}>Execute Proposal</button>
    </div><br></br></>
    
   }
   export default ExecuteProposal;