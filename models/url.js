const mongoose =  require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type:String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type:String,
        required: true
    },
    visitHistory: [{timestamp: {type: Number}}],
    //mujhe sirf mere generated urls hi dekhne hain
    //mai tujhe ek id dunga jo ref krr rhi hogi ek user ko
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
},{timestamps: true}
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;