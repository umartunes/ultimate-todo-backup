import * as passport from'passport'
import * as FacebookTokenStrategy from 'passport-facebook-token'

import Users from '../models/model-users'

const clientID = process.env.fbClientId || "1988058381486259"
const clientSecret = process.env.fbClientSecret || "e40b11fb78d7191f137af4f39be37f16"

passport.use(new FacebookTokenStrategy({

    clientID: clientID,
    clientSecret: clientSecret

}, function (accessToken, refreshToken, profile, next) {

    Users.findOne({ fbId: profile.id }, function (err, user) {

        if (err) { return next(err) }
        
        if( user ){

            next( null, user )

        }else{

            // let randomString = Math.random().toString(36).substring(3);

            let newUser = new Users({ 
                username: profile.id, 
                password: profile.id, 
                // email:  randomString + '@mymail.com', 
                email: profile._json.email, 
                name: profile._json.name,
                nickName: profile.name.givenName,
                firstName: profile._json.first_name,
                lastName: profile._json.last_name,
                fbAccessToken: accessToken,
                fbId: profile.id,
                fbEmail: profile._json.email, 
                fbPhoto: profile.photos[0].value, 
                fbData: JSON.stringify( profile ), 
            });

            newUser.save(function (err, user) {

                if (err) { return next(err) }

                next( null, user )

            })

        }
        
    })

}
))

passport.serializeUser<any, any>( (user, next) => {

    next(null, user._id)

})

passport.deserializeUser( (userId, next) => {

    // Users.findById( userId, 'username, email, registered, name, nickName, fbId, fbPhoto' )
    //     .exec( function (err, user) {
    //     if (err) { return next(err); }
    //     if (!user) { return next(null, false); }
    //     return next(null, user);
    // })
    Users.findOne({ _id: userId }).exec( function (err, user) {
        if (err) { return next(err); }
        if (!user) { return next(null, false); }
        return next(null, user);
    } )

})