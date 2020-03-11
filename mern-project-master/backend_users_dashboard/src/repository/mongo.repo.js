const {MongoClient , ObjectId} = require('mongodb');
const userCollection = require('./collection/user.collection')
const database =  {
    uri:'mongodb://localhost:27017/issuetracker',
    database: 'issuetracker',
    employeeCollection: 'employees',
    projectCollection: 'projects',
}

// holds connection to the repo 
let db = null;



// tracks the connection (ongoing or none)
// only single collection to database

let connectionIsProgress = false;
let connectionPromise = null;

const connect = () => new Promise((resolve, reject)=>{

    if (connectionIsProgress) {
        // checks if connection exist
        return connectionPromise;
    }
    // create a new connection
    connectionIsProgress = true;
    connectionPromise = new Promise(()=> {
        MongoClient.connect(database.uri , (err,client) => {
            if (err) {
                connectionIsProgress = false;
                return reject(err);
            }

            db = client.db(database.database);
            connectionIsProgress = false;
            return resolve(db);
        })
    })
    return connectionPromise;
});

(async ()=> {
   await connect();
    userCollection.setDatabase(db,connect)
    
})();

module.exports = {
  ...userCollection.queries
}


// addEmployee(employee);

// const getEmployee = () => new Promise(async(resolve , reject) => {
//   if (!db) {
//     await connect();
//   }
//   db.collection(database.employeeCollection)
//   .find().toArray((err,docs)=>{
//     if (err) {
//       reject(err)
//     }
//     resolve(docs)
//   })
// })

//  const updateEmployee = (id) => new Promise(async (resolve , reject) => {
//    if (!db) {
//      await connect() ;
//    }
//    db.collection(database.employeeCollection)
//  })

//   ...userCollection.queries,
// }




