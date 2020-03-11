const httpStatus = require('http-status');
// import adduser
const userCollection = require('./repository/collection/user.collection')

exports.user = async (req , res , next) => {
    try {
        const {data} = req.body
        const userAdded = await userCollection.queries.addEmployee(data);
        return res.status(httpStatus.OK).json({userAdded});
    }
    catch(error) {
        console.log(error , "error in user controller")
    }
    
}

