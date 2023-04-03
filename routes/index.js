const express = require('express')
const { route } = require('express/lib/application')
const router  = express.Router()
// '/' -> localhost:3000 root of the server
router.get('/', (req, res )=> {
    res.render("index")
})

module.exports = router      // => exporting the route or controller