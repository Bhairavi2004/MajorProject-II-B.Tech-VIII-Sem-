import React, { useState } from 'react';
import { verifyCredential } from '../services/blockchainService';

function VerifyCredential() {
    const [address, setAddress] = useState('');
    const [verified, setVerified] = useState(null);

    const handleVerify = async () => {
        const result = await verifyCredential(address);
        setVerified(result);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={handleVerify}>Verify Credential</button>
            {verified !== null && <p>Verified: {verified.toString()}</p>}
        </div>
    );
}

export default VerifyCredential;
