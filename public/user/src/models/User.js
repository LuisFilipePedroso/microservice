const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const validator = require('validator');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email'
        }
    },
    bio: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },

}, {timestamps: true});

mongoose.plugin(mongoosePaginate);
mongoose.model('User', UserSchema);
