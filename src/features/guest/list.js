const { request, response } = require("express")
const db = require("../../conn")

async function guest_list(req = request, res = response){
    try {
        const result = await db.guests.findMany()
        return res.status(200).json({
            success : true,
            query : result
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
    guest_list
}