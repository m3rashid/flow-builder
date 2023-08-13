import mongoose from 'mongoose';
import { MODEL, MODEL_NAMES, MODEL_UTILS } from 'shared';

const flowSchema = new mongoose.Schema<MODEL.Flow>(
  {
    name: { type: String, required: true },
    trigger: { type: Boolean, required: true, default: false },
    description: { type: String },
    edges: [
      {
        from: { type: Number, required: true },
        to: { type: Number, required: true },
        condition: { type: Boolean, required: true, default: false },
      },
    ],
    nodes: [
      {
        label: { type: String, required: true },
        description: { type: String },
        position: {
          x: { type: Number, required: true },
          y: { type: Number, required: true },
        },
        prevData: { type: mongoose.Schema.Types.Mixed, default: {} },
        action: { type: mongoose.Schema.Types.Mixed, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Flow = MODEL_UTILS.paginatedCompiledModel<MODEL.Flow>(
  MODEL_NAMES.flow,
  flowSchema
);
