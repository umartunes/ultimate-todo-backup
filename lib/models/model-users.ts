import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'

const Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
        default: 'active'
    },
    role: {
        type: String,
        trim: true,
        default: 'user'
    },
    name: {
        type: String,
        trim: true,
    },
    nickName: {
        type: String,
        trim: true,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    registered: {
        type: Date,
        default: Date.now
    },
    activationKey: {
        type: String,
        trim: true,
    },
    fcmTokens:{
        type: []
    },
    fbAccessToken: {
        type: String,
        trim: true,
    },
    fbId: {
        type: String,
        trim: true,
    },
    fbEmail: {
        type: String,
        trim: true,
    },
    fbPhoto: {
        type: String,
        trim: true,
    },
    fbData: {
        type: String,
        trim: true,
    },
})

usersSchema.pre('save', function (next) {

    var user = this;

    bcrypt.hash( user.password, 10, function (err, hash) {
        if (err) {
            return next(err)
        }
        user.password = hash
        next()
    })

})

usersSchema.methods.verifyPassword = function ( password, callback ) {

    var user = this;

    bcrypt.compare(password, user.password, function(err, isValid) {
        if (err) {
            callback(err)
        }
        callback(null, isValid)
    })

}

var Users = mongoose.model('Users', usersSchema)

export default Users