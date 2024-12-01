const crypto = require("crypto");

const algorithm = "aes-256-ctr";
const secretKey = "96c8f9d8d51c410532a781cfb37a73ab";
const iv = "d0229568bbc258c6";

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString("hex");
};

const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash, "hex")),
    decipher.final(),
  ]);
  return decrpyted.toString();
};

module.exports = {
  encrypt,
  decrypt,
};
