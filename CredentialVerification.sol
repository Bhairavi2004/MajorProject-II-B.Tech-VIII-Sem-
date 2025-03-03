// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialVerification {
    struct Credential {
        address issuedTo;
        string degree;
        uint256 year;
        bool verified;
    }

    mapping(address => Credential) public credentials;

    function issueCredential(address _to, string memory _degree, uint256 _year) public {
        credentials[_to] = Credential(_to, _degree, _year, true);
    }

    function verifyCredential(address _to) public view returns (bool) {
        return credentials[_to].verified;
    }
}
