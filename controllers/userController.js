const { User } = require('../models');

module.export = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err)=> res.status(500).json(err));
    
    },
}
//     getSingleUser(req, res) {
//         try{
//             const user = User.findone({ _id: req.params.id });
//             res.json(user);
//         }
//         catch(err){
//             res.status(500).json(err);
//         }
//     },
    
//     createUser(req, res) {
//             try{
//                 const user = User.create(req.body);
//                 res.json(user);
//             }
//             catch(err){
//                 res.status(500).json(err);
//             }
//         },
//     updateUser(req, res) {
//             try{
//                 const user = User.findOneAndUpdate(
//                     { _id: req.params.id },
//                     {$set: req.body},
//                     {runValidators: true,}
//                 )
//                 res.json(user);
//             }
//             catch(err){
//                 res.status(500).json(err);
//             }
//         },
//     deleteUser(req, res) {
//         try{
//             const user = User.findOneAndDelete({ _id: req.params.id });
//             if(!user){
//                 res.status(404).json({message: "No user found with this id!"});
//                 return;
//             }
//             res.json({message: "User deleted!"});
//         }
//         catch(err){
//             res.status(500).json(err);
//         }
//     }
// }

 // module.exports = userController;
