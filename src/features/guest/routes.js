const { Router } = require("express")
const { guest_create } = require("./create")
const { guest_list } = require("./list")
const { guest_delete } = require("./delete")
const { guest_update } = require("./update")

const guest_routes = Router()

// Create Route
guest_routes.post("/api/guest/create" , guest_create)
guest_routes.post("/api/guest/list", guest_list)
guest_routes.delete("/api/guest/delete", guest_delete)
guest_routes.put("/api/guest/update", guest_update)

module.exports = guest_routes