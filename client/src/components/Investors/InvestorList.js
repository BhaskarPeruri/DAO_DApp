import {useState,useEffect} from "react"
function InvestorList({state}){
   const[list,setList]= useState([]);//initialized list to an empty array
   useEffect(()=>{ 
      const{contract} = state;
      async function investors(){
         const arrayInvestors = await contract.methods.InvestorList().call();
         setList(arrayInvestors)
         // console.log(arrayInvestors)
      }
      contract && investors()

   },[state])
 
   return<>
    <div className="list">
    <h3>Investor's List</h3>
      {list.map((investorAddress,i)=>{
         return<p key ={i}>{investorAddress}</p>
      })}
    </div>
   </>
  }
  export default InvestorList;