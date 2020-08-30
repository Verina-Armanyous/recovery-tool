const express = require("exress");

const router = express.Router();

const action_controller = require("../controllers/actionController");

router.post("/actions", action_controller);

module.exports = router;
