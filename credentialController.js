const credentialService = require('../services/credentialService');

exports.issueCredential = async (req, res) => {
    const { to, degree, year } = req.body;
    const result = await credentialService.issueCredential(to, degree, year);
    res.json(result);
};

exports.verifyCredential = async (req, res) => {
    const { address } = req.params;
    const verified = await credentialService.verifyCredential(address);
    res.json({ verified });
};
