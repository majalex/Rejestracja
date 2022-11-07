const express = require("express");
const router = express.Router();

const user = require('../controllers/registrationController');

//pobieranie wszystkich danych
router.get('/all', function(req, res){
    user.list(function(err, posts){
        if(err) {
            res.status(404);
            res.json({
                error: "Posts not found"
            });
        } else {
            res.json(posts);
        }
    });
});

//Rejestracja uzytkownika
router.post('/add', auth, function (req, res) {
    user.add(req.body, function (err, post) {
        if(err) {
            res.status(404);
            res.json({
                error: "Post not added"
            });
        } else {
            res.json(post);
        }
    })
});

//zmiana danych
router.put('/update/:id', function(req, res){
    user.update(req.params.id, req.body, function(err, data){
        if(err) {
            res.status(404);
            res.json({
                error: "Post not found"
            });
        } else {
            res.json(data);
        }
    });
     
})

//usówanie
router.delete('/delete/:id', function(req, res){
    user.delete(req.params.id, function(err, data){
        if(err) {
            res.status(404);
            res.json({
                error: "Post not found"
            });
        } else {
            res.json(data);
        }
    });
     
});

module.exports = router;