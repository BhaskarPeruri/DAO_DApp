# Decentralized Autonomous Organization(DAO)


An organization on a blockchain represented by a set of rules encoded as a computer program that  is transparent controlled by organization members and not  influenced by a central authority.

# Functions of DAO DApp

1 contribution function: 

    Allows users to contribute Ether to the DAO during the specified contribution time.

2 reedemShare function : 

    Enables investors to redeem a specific amount of shares, transferring Ether back to them.

3 transferShare function:

    Allows an investor to transfer shares to another address.

4 createProposal function:

    Permits the manager to create a proposal for fund allocation.

5 voteProposal function:

     Allows investors to vote on a specific proposal.

6 executeProposal function: 

    Allows the manager to execute a proposal if the quorum is met.

7 _transfer function: 
  
    Private function to transfer Ether to a specified recipient.

8 ProposalList function: 

    Returns an array containing information about all proposals.

9 InvestorList function: 
  
    Returns an array containing the addresses of all investors.

To run the project

1 Start the ganache local blockchain.

2 Navigate to the client directory and then run the following command. 
      
    npm install

3 Start the server using the command .

    npm start  

4 Navigate to the DAO_DAPP directory and run the command.

    truffle migrate --reset







# Note:

This is a simplified DAO implementation for educational purposes. In a real-world scenario, additional features, security measures, and considerations would be necessary.





