const crypto = require("crypto");

const pw = "pw1234";

// createHash - 암호화 알고리즘
//
const cryptoPW = crypto.createHash("sha512").update(pw).digest("base64");
console.log(cryptoPW);

const createSalt = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) reject(err);

            resolve(buf.toString("base64"));
        });
    });
}

const createCryptoPassword = async (plainPassword) => {
    const salt = createSalt();

    return new Promise((resolve, reject) => {
        crypto.pdkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
            if (err) reject(err);

            resolve({password: key.toString("base64"), salt: salt});
        });
    });
}