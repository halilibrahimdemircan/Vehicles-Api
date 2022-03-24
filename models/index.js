const User = require("./user");
const Post = require("./post");
const Car = require("./car");
const Boat = require("./boat");
const Bus = require("./bus");

// table relationships
User.hasMany(Post);
Post.belongsTo(User);

module.exports = { User, Post };
