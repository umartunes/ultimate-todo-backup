import * as express from 'express'
import * as passport from 'passport'

var router = express.Router()

router.post('/check', function (req, res) {

    // let user = { username: '10214914147200302', email: 'dummy@mail.com', registered: '2018-08-05T13:18:28.933Z', name: 'Dummy User', nickName: "Dummy", fbId: '10214914147200302', fbPhoto: 'https://graph.facebook.com/v2.6/10214914147200302/picture?type=large', }
    
    if ( req.isAuthenticated() ) {
        res.json({ auth: true, success: true, user: req.user, message: "Successfully logged in" })
    } else {
        res.json({ auth: false, success: true, message: "Logged Out" })
    }
    
})

router.get('/logout', function (req, res : any) {
    
    req.logout()
    res.send(200, { auth: false, success: true, user: null, message: "Successfully logged out" })

})

router.post('/login', passport.authenticate('local'), function (req, res) {

    let user = { 
        username: req.user.username, 
        email: req.user.email, 
        registered: req.user.registered, 
        name: req.user.name, 
        nickName: req.user.nickName, 
        fbId: req.user.fbId, 
        fbPhoto: req.user.fbPhoto, 
    }
    res.send({ success: true, user: user, message: "Successfully logged in",  })

})

router.post('/facebookAuthToken', passport.authenticate('facebook-token'), function (req, res) {
    
    res.send({ auth: true, success: true, user: req.user, message: "Successfully logged in",  })

})

router.get('/logintest', passport.authenticate('local'), function (req, res) {
    
    res.send({ auth: true, success: true, user: req.user, message: "Successfully logged in",  })

})

export default router