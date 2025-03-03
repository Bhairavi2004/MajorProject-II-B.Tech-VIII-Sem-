const Web3 = require('web3');
const CredentialVerification = require('../../contracts/CredentialVerification.json');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const contract = new web3.eth.Contract(CredentialVerification.abi, 'CONTRACT_ADDRESS');

exports.issueCredential = async (to, degree, year) => {
    await contract.methods.issueCredential(to, degree, year).send({ from: 'ISSUER_ADDRESS' });
    return { success: true };
};

exports.verifyCredential = async (address) => {
    const verified = await contract.methods.verifyCredential(address).call();
    return verified;
};
