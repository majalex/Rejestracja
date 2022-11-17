const express = require("express");
const router = express.Router();

const user = require('../controllers/registrationController');

//pobieranie wszystkich danych
router.get('/all', function(req, res){
    user.list(function(err, users){
        if(err) {
            res.status(404);
            res.json({
                error: "Users not found"
            });
        } else {
            res.json(users);
        }
    });
});

//Rejestracja uzytkownika
router.post('/add', function (req, res) {
    user.add(req.body, function (err, user) {
        if(err) {
            res.status(404);
            res.json({
                error: "User not added"
            });
        console.log(err);
        } else {
            res.json(user);
        }
    })
});

//zmiana danych
router.patch('/update/:id', function(req, res){
    user.update(req.params.id, req.body, function(err, data){
        if(err) {
            res.status(404);
            res.json({
                error: "User not found"
            });
        } else {
            res.json(data);
        }
    });
     
})

//usówanie
router.delete('/delete/:id', function(req, res){
    console.log(req.params.id);
    user.delete(req.params.id, function(err, data){
        if(err) {
            res.status(404);
            res.json({
                error: "User not found"
            });
            console.log(err);
        } else {
            res.json(data);
        }
    });
     
});

module.exports = router;