import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://itssonicx:Fn5U4lZ1QDPgUfhD@popcluster.e0deehd.mongodb.net/?retryWrites=true&w=majority&appName=PopCluster";

// = = = = = = = = = = = = Adding billing table on mongodb = = = = = = = = = = = = //
const billingSchema = new mongoose.Schema({
  shopDomain: String,
  subcriptionId: String,
  createdAt: { type: Date, default: Date.now },
});

// var billingModel = mongoose.model("BIlling", billingSchema);

const connectToMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToMongoDB;
