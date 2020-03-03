const mongoose = require("mongoose");

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect(
      "mongodb://localhost:27017/DK_Mall",
      { dbName: "DK_Mall" },
      err => {
        if (err) {
          console.log("Error ❌");
        } else {
          console.log("Connected to MongoDB!✅");
        }
      }
    );
  };

  connect();
  mongoose.connection.on("Error", err => {
    console.log("몽고DB 연결 오류!!");
  });
  mongoose.connection.on("Disconnected", () => {
    console.log("연결 재시도중...");
  });
};
