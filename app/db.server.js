import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://superuser:khuljasimsim@clusterpop.siic13b.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPop";

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
