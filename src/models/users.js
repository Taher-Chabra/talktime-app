import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'User';

export const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] || // look for this model in the mongoose list of models
  mongoose.model(MODEL_NAME, userSchema, 'users'); // if not present, create a new model
