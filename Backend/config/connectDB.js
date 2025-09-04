import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // console.log("🔗 Connecting to:", process.env.MONGODB_URL); // debug

        await mongoose.connect(process.env.MONGODB_URL, {
            //   useNewUrlParser: true,
            //   useUnifiedTopology: true,
        });

        console.log("✅ DB Connected...");
    } catch (error) {
        console.error("❌ DB Connection Failed:", error.message);
        process.exit(1); // stop server if DB fails
    }
};

export default connectDB;
