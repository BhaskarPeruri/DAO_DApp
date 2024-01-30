const Migrations = artifacts.require("DAO");

module.exports = function (deployer) {

  deployer.deploy(Migrations,"3600","3600","3");//passing arguements to the constructor of DAO.sol
};