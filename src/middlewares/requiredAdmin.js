 async function requireAdmin(req, res, next){

    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "Forbidden: Admin only"
        })
    }

    next()
}

export default requireAdmin