import mongoose, { Schema } from 'mongoose';
import { userSchema } from './users';

const MODEL_NAME = 'Room';

export const roomSchema = new Schema({
  roomId: {
    type: String,
    required: true,
  },
  users: [userSchema],
});

export default mongoose.models[MODEL_NAME] || // look for this model is the mongoose list of models
  mongoose.model(MODEL_NAME, roomSchema, 'rooms'); // if not present, create a new model
