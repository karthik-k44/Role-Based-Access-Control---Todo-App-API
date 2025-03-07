

export const adminMiddleware=(req, res, next)=>{
    const role= req.user.role
    console.log(req.user.role)
    if (!req.user || req.user.role !== "Admin")
    {
        return res.status(404).json("ACCESS DENIED : Admins Only")
    }

    next()
}

export default adminMiddleware