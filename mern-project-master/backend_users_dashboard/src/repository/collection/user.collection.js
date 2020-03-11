let db = null;
let connect = null;

exports.setDatabase = (_db , _connect) => {
    db = _db,
    connect = _connect
}

const addEmployee = (employee) => new Promise(async (resolve , reject) => {
    if (!db) {
        await connect();
    }
    db.collection('employees')
    .insert(employee)
    .then(resolve)
    .catch(reject)

})

exports.queries = {
    addEmployee
}