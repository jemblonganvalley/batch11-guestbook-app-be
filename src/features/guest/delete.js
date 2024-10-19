const { request, response } = require("express")
const db = require("../../conn")

async function guest_delete(req = request, res = response) {
    try {

        const { ids } = await req.body
        const result = await db.guests.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        })

        return res.status(201).json({
            success : true,
            message : `success delete ${result.count} data !`
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            error: error,
        })
    }
}

module.exports = {
    guest_delete
}