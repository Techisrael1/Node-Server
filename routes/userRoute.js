const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
router.get(`/users`, (req, res) => {
	userModel
		.find()
		.then((user) => {
			res.json(user);
		})
		.catch((error) => {
			res.status(500),
				json({
					error: error.message,
				});
		});
});

router.post(`/users`, (req, res) => {
	const newUser = new userModel({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		age: req.body.age,
		address: req.body.address,
		job: req.body.job,
	});
	newUser.save()
		.then((newUser) => {
			res.status(201).json(newUser);
		})
		.catch((error) => {
			res.status(400).json({
				error: error.message,
			});
		});
});

router.put(`/users/:id`, (req, res) => {
	res.send({
		type: "PUT",
	});
});

router.delete(`/users/:id`, (req, res) => {
	res.send({
		type: "DELETE",
	});
});

module.exports = router;
