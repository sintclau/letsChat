import db from "./dbconfig";

async function dbCheckUser(username, password) {
    console.log("checking...");
    const userPassword = await passwordChecker(username);
    if (userPassword === false) {
        return false;
    } else {
        if (password === userPassword) {
            return true;
        } else {
            return false;
        }
    }
}

async function passwordChecker(username) {
    return new Promise((resolve, reject) => {
        db.searchByValue(
            {
                schema: 'auth',
                table: 'users',
                searchAttribute: 'username',
                searchValue: username,
                attributes: ['password']
            },
            (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    if (res.data.length === 0) {
                        resolve(false);
                    } else {
                        resolve(res.data[0].password);
                    };
                }
            }
        );
    });
}

export default dbCheckUser;