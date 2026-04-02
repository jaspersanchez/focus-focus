import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to DB');
  } catch {
    console.log('Something went wrong connecting to DB');
    process.exit(1);
  }
};

export default connectDB;
