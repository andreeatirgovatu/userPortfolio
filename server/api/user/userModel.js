import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  file: { type: String, required: true },
  occupation: String,
  password: { type: String, required: true },
  reset_password_token: String,
  reset_password_expires: Date
});

//TODO arraw function; at the moment mongoose is not working with it
UserSchema.pre("save", function(next) {
  let user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  user.password = user.encryptPassword(user.password);
  next();
});

UserSchema.methods = {
  // check the passwords on signin
  authenticate: function(plainTextPass) {
    return bcrypt.compareSync(plainTextPass, this.password);
  },
  // hash the passwords
  encryptPassword: function(plainTextPass) {
    if (!plainTextPass) {
      return "";
    } else {
      let salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
      return bcrypt.hashSync(plainTextPass, salt);
    }
  },

  toJson: function() {
    let obj = this.toObject();
    delete obj.password;
    return obj;
  }
};
const user = mongoose.model("User", UserSchema);
export default user;
