const { Router } = require("express")
const { guest_create } = require("./create")

const guest_routes = Router()

// Create Route
guest_routes.post("/api/guest/create" , guest_create)


module.exports = guest_routes