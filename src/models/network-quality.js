import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'NetworkQuality';

export const networkQualitySchema = new Schema({
  roomId: String,
  userId: {
    type: String,
    required: true,
  },
  networkQualityLevel: Number,
  audioRecv: Number,
  audioSend: Number,
  videoRecv: Number,
  videoSend: Number,
});

export default mongoose.models[MODEL_NAME] || // look for this model is the mongoose list of models
  mongoose.model(MODEL_NAME, networkQualitySchema, 'network-quality'); // if not present, create a new model
