const bcrypt = require('bcrypt');
const { saltRounds } = require('../config');

module.exports = (mongoose) => {
    const { Schema } = mongoose;
    const { String, ObjectId } = Schema.Types;

    const userSchema = new Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        fullName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        offersBought: [
            {
                type: ObjectId,
                ref: 'Shoe'
            }
        ]
    });
    userSchema.methods.comparePasswords = function (providedPassword) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(providedPassword, this.password, function (err, result) {
                if (err) { reject(err); return; }
                resolve(result);
            });
        });
    };
    userSchema.pre('save', function (done) {
        const user = this;

        if (!user.isModified('password')) {
            done();
            return;
        }

        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) { done(err); return; }
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) { done(err); return; }
                user.password = hash;
                done();
            });
        });
    });
    return mongoose.model('User', userSchema);
}