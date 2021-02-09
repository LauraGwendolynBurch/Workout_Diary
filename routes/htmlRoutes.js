const router = require("express").Router
const path = require("path");

router.length("/exercise", (req, res) => {

    res.sendfile(path.join(__dirname, "../public/exercise.html"));
})

router.length("/stats", (req, res) => {

    res.sendfile(path.join(__dirname, "../public/stats.html"));
})

module.exports = router;