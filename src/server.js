// import package yang di butuhkan
const express = require("express")
const cors = require("cors")
const env = require("dotenv")
const db = require("./conn")
const guest_routes = require("./features/guest/routes")

// jalankan config env
env.config()

const app = express()
const PORT = process.env.PORT

// default middleware 
app.use(cors())
app.use(express.json({
    limit: "100mb"
}))
app.use(express.urlencoded({
    extended: true
}))

// routes versi 2
app.use(guest_routes)

// routes
app.get("/api/test", (req, res) => {
    console.info("ada request baru..")

    res.json({
        name: "selastio fadli",
        address: "jakarta"
    })
})

// routes untuk get all guests
app.get("/api/guests", async (req, res) => {
    try {
        let result = await db.guests.findMany()
        res.json(result)
    } catch (error) {
        console.error(error)
        res.send("Terjadi kesalahan")
    }
})

// mendapatkan req query dan masukan ke database
app.post("/api/guest/create/query", async (req, res) => {
    try {
        // definisikan query params yang ingin di tangkap
        const { name, address, message } = req.query

        // masukan ke database table guests
        const result = await db.guests.create({
            data: {
                name: name,
                address: address,
                message: message
            }
        })

        res.json(result)
    } catch (error) {
        console.error(error)
        res.json(error)
    }
})

// mendapatkan req params dan masukan ke database
app.post("/api/guest/create/params/:name/:address/:message", async (req, res) => {
    try {

        // tangkap params dari url
        const { name, address, message } = req.params

        // masukan ke database di table guest
        const result = await db.guests.create({
            data: { name, address, message }
        })

        res.json(result)

    } catch (error) {
        console.error(error)
        res.json(error)
    }
})

// mendapatkan req body dan masukan ke database
app.post("/api/guest/create/body", async (req, res) => {
    try {

        // dapatkan req body 
        const { name, address, message } = await req.body

        // masukan ke database di table guest
        const result = await db.guests.create({
            data: { name, address, message }
        })

        res.json(result)

    } catch (error) {
        console.error(error)
        res.json(error)
    }
})

app.listen(PORT, () => {
    console.info(`
    =========================
    SERVER BACKEND GUEST APP
    =========================    
    `)
})

