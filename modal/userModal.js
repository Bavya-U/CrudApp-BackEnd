import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type : String,
    },
    email: {
        type : String,
    }
}, {
    timestamps:true
})
const userModal = mongoose.model("User", userSchema);
export default userModal;