import db from "./dbconfig";

function dbAddData(username, password) {
    db.insert(
        {
          schema: 'auth',
          table: 'users',
          records: [
            {
              username: username,
              password: password
            }
          ]
        }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export default dbAddData;