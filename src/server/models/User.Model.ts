import { Schema, model, Document } from 'mongoose';

// Define the user schema
const UserSchema = new Schema<UserDocument>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  company: { type: String },
  age: { type: Number },
  address: { type: String },
  city: { type: String },
  county: { type: String },
  postcode: { type: String },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Define the user interface
interface User {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  age?: number;
  address?: string;
  city?: string;
  county?: string;
  postcode?: string;
  phone?: string;
  createdAt?: Date;
}

// Define the user document interface (includes both User fields and mongoose.Document methods)
interface UserDocument extends User, Document {}

// Create and export the user model
export default model<UserDocument>('User', UserSchema);