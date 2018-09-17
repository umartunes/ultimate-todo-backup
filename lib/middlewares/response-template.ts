const responseTemplate = (req, res, next) => {

    res.t = {
        auth: req.isAuthenticated(),
        success: false,
        message: "",
        data: null
    }

    next()
    
}

export default responseTemplate