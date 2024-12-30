import mongoose from 'mongoose';

const subtodoSchema = new mongoose.Schema(
  {
    Content: {
      type: String,
      required: true,
    },
    Complete: {
      type: Boolean,
      default: false,
    },
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const subtodo = mongoose.model('subtodo', subtodoSchema);
