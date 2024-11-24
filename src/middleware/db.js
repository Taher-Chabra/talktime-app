import mongoose from 'mongoose';

export async function dbConnect() {
  // If already connected, return the existing connection
  if (mongoose.connection.readyState >= 1) return;

  // Connect to MongoDB
  return mongoose.connect(process.env.DB_CONN_STR)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });
}

export default async function dbMiddleware(req, res, next) {
  try {
    if (!global.mongoose) {
      global.mongoose = dbConnect();
    }
  } catch (e) {
    console.error(e);
  }
  return next();
}
