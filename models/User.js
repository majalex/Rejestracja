const mongoose = require("mongoose");

// db connect
mongoose.connect('mongodb://localhost:27017/eventRegistration',  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});


const schema = new mongoose.Schema ({
    name: {type: String, required: true},
    lname: {type: String, required: true},
    event: {type: String, required: true},
    city: {type: String, required: true},
}, { timestamps: true });
 
module.exports = mongoose.model('User', schema);