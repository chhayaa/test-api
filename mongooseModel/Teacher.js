var schema = new Schema({
    name: String,
    mobileNo: Number,
    subjectName: String,
    address: {
        add1: String,
        add2: String,
        add3: String
    },

    status: {
        type: "String",
        enum: ["Active", "Inactive"],
        default: "Active"
    }
})
export default mongoose.model("Teacher", schema)
