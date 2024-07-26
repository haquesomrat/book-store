const mongoose = require("mongoose");
const uri = String(process.env.MONGO_URI);

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    return connection;
  } catch (err) {
    console.log(err);
  }
}
