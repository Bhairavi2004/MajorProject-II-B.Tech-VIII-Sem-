import Web3 from 'web3';
import CredentialVerification from '../../contracts/CredentialVerification.json';

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(
    CredentialVerification.abi,
    'CONTRACT_ADDRESS'
);

export const verifyCredential = async (address) => {
    const verified = await contract.methods.verifyCredential(address).call();
    return verified;
};
