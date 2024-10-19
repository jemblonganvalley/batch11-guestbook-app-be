const { request, response } = require("express")
const db = require("../../conn")

async function guest_update(req = request, res = response) {
    try {
        const { id, data } = await req.body
        const result = await db.guests.update({
            where: {
                id: id
            },
            data: data
        })

        return res.status(201).json({
            success: true,
            message: "success update data"
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
    guest_update
}