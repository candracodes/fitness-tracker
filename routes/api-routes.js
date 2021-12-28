// TODO: Figure out why durations isn't working on stats page

// Import express router
const router = require("express").Router();

// Import workout model
const db = require("../models/exercise");

// GET Request for getting all workouts
router.get("/api/workouts", (req, res) => {
	db.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// TODO: Attempted to properly use $addFields and aggregate, but to no avail. Will revisit
// router.get("/api/workouts", (req, res) => {
// 	db.Workout.aggregate([{
// 			$addFields: {
// 				totalDuration: {
// 					$sum: "$exercises.duration"
// 				},
// 			},
// 		}, ])
// 		.then((dbData) => {
// 			res.json(data);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.json(err);
// 		});
// });

// GET request
router.get("/api/workouts/range", (req, res) => {
	db.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// TODO: Attempted to properly use $addFields and aggregate, but to no avail. Will revisit
// router.get("/api/workouts/range", (req, res) => {
// 	db.Workout.aggregate([{
// 			$addFields: {
// 				totalDuration: {
// 					$sum: "$exercises.duration"
// 				},
// 				totalWeight: {
// 					$sum: "$exercises.weight"
// 				},
// 			},
// 		}, ])
// 		.then((dbData) => {
// 			res.json(data);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.json(err);
// 		});
// });

// POST workout
router.post("/api/workouts", ({
	body
}, res) => {
	db.create(body)
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// PUT/Update workout
// TODO: Research set, trying to populate the duration in the line chart... , $set: { totalDuration: totalDuration}
// TODO: Run a loop so that when you set the duration it updates each time
router.put("/api/workouts/:id", ({
	body,
	params
}, res) => {
	db.findByIdAndUpdate(params.id, {
			$push: {
				exercises: body
			}
		})
		.then((dbData) => {
			console.log(body);
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Export API routes
module.exports = router;