// :::: Modules Importing & Pulling Required Objects
import mongoose from 'mongoose';
const Schema = mongoose.Schema;


// :::: Importing password encryption tool
import bcrypt from 'bcrypt';


// :::: Scaffolding User schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


// :::: Encrypt user's chosen password before saving it in database
UserSchema.pre('save', function(next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
})


// :::: Accessing database through model
const User = mongoose.model('User', UserSchema);


export default User;