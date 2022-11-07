const User = require('../models/User');


function userList(cb) {
    User.find().lean().exec(function(err, users) {
        if(err) {
            cb(err)
        } else {
            cb(null, users)
        }
    });
}

function userAdd(data, cb) {
    let newUser = new User(data);
 
    newUser.save(function(err, User){
        if (err) {
            cb(err);
        } else {
            cb(null, User);
        }
    });
}

function userUpdate(id, data, cb) {
    Post.updateOne({_id: id}, data, function(err, post) {
 
        if(err) {
            cb(err);
        } else {
            cb(null, User);
        }
 
    });
}

function userDelete(id, cb) {
    Post.deleteOne({_id: id},function (err, post) {
        if (err) {
            cb(err);
        } else {
            cb(null, User);
        }
    });
}



module.exports = {
    list: userList,
    add: userAdd,
    update: userUpdate,
    delete: userDelete

}