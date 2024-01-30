import "./investors.css"
function TransferShare({state,account}){
    async function shareTransfer(event){
        try{

            event.preventDefault();//preventing page from refresh when form submitting
            const {contract} =state;
            const amount = document.querySelector("#amount").value;
            const address = document.querySelector("#to").value.toString();
            
            await  contract.methods.transferShare(address).send({from:account,gas:480000,value:amount})
        }
        catch(error){
            alert(error)
        }
        window.location.reload()
    }

    return<><div id="myForm">
    <label className="label1" htmlFor="amount">
    <span className="font">Amount:</span>
        </label>
    <input type="text" id="amount" placeholder="Enter amount"></input>
    <label className="label1" htmlFor="to">
        <br></br>
    <span className="font">Address:</span>
        </label>
    <input type="text" id="to" placeholder="Enter address"></input>
    <br></br>
    <br></br>
    <button className="button" type="button" onClick={shareTransfer}>Transfer Share</button>
    </div><br></br></>
   }
   export default TransferShare;