const { request, response } = require("express")
const db = require("../../conn")

async function guest_create( req = request , res = response ){
    try {
        
        // ambil data dari req body
        const { name, address, message } = await req.body

        // masukan data ke database 
        const result = await db.guests.create({
            data : {name, address, message}
        })

        // lempar response data
        res.status(201).json({
            success : true,
            message : "Berhasil tambah data guest"
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success : false,
            error : error,
        })
    }
}

module.exports = {
    guest_create
}