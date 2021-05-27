var schema = new Schema({
    name: String,
    image: String,
    roll_num: Number,
    standard: String,
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
export default mongoose.model("Student", schema)
