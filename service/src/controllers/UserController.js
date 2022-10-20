const User = require('../models/User');

module.exports = {
    post: (req, res) => {
        const user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            description: req.body.description,
            email: req.body.email,
            image: req.body.image
        });
        user.save()
        .then(result => res.status(201).send())
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
    },
}