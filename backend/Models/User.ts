import mongoose, { Document } from "mongoose";
import CONSTANTS from "../constants";

interface IUser extends Document {
  name: string;
  email: string;
  role: string;
  password:string;
}
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true ,minLength:3,maxLength:20,unique:true},
    email: { type: String, required: true, unique: true, lowercase: true },
     password:{type:String,required:true},
    role: {
      type: String,
      enum: CONSTANTS.USER_ROLE,
      default: CONSTANTS.USER_ROLE[0],
    }
  },
  { timestamps: true }
);
userSchema.methods.toJSON =function():Object{
const obj = this.toObject();
delete obj.password
return obj
}
const User = mongoose.model<IUser>("User", userSchema);

export default User;
