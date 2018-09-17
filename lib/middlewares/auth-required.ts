const authRequired = (req, res, next) => {

    if ( !req.isAuthenticated() ) {
        res.t.message = "Authentication Required"
        return res.send(res.t)
    }

    next()
    
}

export default authRequired