import "./investors.css"
function ReedemShare({state,account}){
    async function shareRedeem(event){
        try{

            event.preventDefault();
            const {contract} = state;
            const shares = document.querySelector("#shares").value;
            await contract.methods.reedemShare(shares).send({from:account, gas:480000})
        }
        catch(error){
            alert(error)
        }
        window.location.reload()
    }
   
    return<><div id="myForm">
         <label className="label1" htmlFor="shares">
         <span className="font">Number of Shares:</span>
        </label>
    <input type="text" id="shares"placeholder="Enter Shares"></input>
    <br></br>
    <br></br>
    <button className="button" type="button" onClick={shareRedeem}>Reedem Share</button>
    </div><br></br></>
}
export default ReedemShare;