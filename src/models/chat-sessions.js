import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'ChatSession';

export const messageSchema = new Schema({
  user: {
    name: String,
    id: String,
    color: String,
    email: String,
    image: String,
  },
  message: {
    body: String,
    date: {
      type: Date,
      default: Date.now,
    },
    time: String,
  },
});

export const chatSessionSchema = new Schema(
  {
    roomId: {
      type: String,
      required: true,
    },
    messages: [messageSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] || // look for this model is the mongoose list of models
  mongoose.model(MODEL_NAME, chatSessionSchema, 'chat-sessions'); // if not present, create a new model
