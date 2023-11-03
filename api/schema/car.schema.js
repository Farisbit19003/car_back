import mongoose from "mongoose";
const { Schema } = mongoose;

const carSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    carModel: {
      type: String,
      required: true,
      minlength: 3, 
    },
    price: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    image: [
      {
        url: String,
        publicId: String,
      },
    ],
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);
export default Car; 
