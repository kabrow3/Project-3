function createUser(req, res) {
    console.log(req.body);

    res.json({ created: true, user: req.body });
}

module.exports = { createUser };