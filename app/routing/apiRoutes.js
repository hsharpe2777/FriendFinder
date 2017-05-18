
var friends = require("../data/friends");


module.exports= function(app){


    //use entire public directory so that you can retrieve the css files
    //create new reservation
    app.get("/api/friends", function(req, res) {

        return res.json(friends);

    });

    //create new friend
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        //push new friend to "friends" array
        friends.push(newFriend);
        var newFriend = req.body;
        console.log(friends);

    });


};