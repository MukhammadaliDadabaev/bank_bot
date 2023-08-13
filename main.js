require("dotenv").config();
const mongooseClient = require("./lib/mongoose/client.js");
const userModel = require("./lib/mongoose/user.model");

async function main() {
  await mongooseClient;

  // const users = await userModel.find();

  const newUser = new userModel({
    chatId: 1234010089,
    name: "ABD",
    phoneNumber: "+896624557774",
  });

  await newUser.save();
  // console.log(users);
}

main();
