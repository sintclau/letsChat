import db from "./dbconfig";

function dbCheckUser(username, password) {
    const passwordChecker = db.searchByValue(
        {
            schema: 'auth',
            table: 'users',
            searchAttribute: 'username',
            searchValue: username,
            attributes: ['password']
        }
    );
    if (password == passwordChecker) {
        return true;
    } else return false;
}

export default dbCheckUser;