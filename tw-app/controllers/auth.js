// POST /api/auth/signup
function createUser(req, res) {
    console.log(req.body);

    res.json({ created: true, user: req.body });
}

// POST /api/auth/signin
function authenticateUser(req, res) {
    console.log(req.body);

    res.json({ authenticated: true, user: req.body });
}

module.exports = { authenticateUser, createUser };
