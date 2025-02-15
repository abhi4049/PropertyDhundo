import mongoose from 'mongoose';
const { Schema } = mongoose;
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const propertySchema = new Schema(
    {
        description: { type: String, required: true },
        price: { type: Number, required: true },
        flat: { type: String, required: true },
        building: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
        type: { type: String, required: true, enum: ['flat', 'villa', 'bungalow'] },
        size: { type: Number, required: true },  // in square feet
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        amenities: { type: String },  // List of amenities
        images: { type: [String], required: true },  // List of image URLs
        yearBuilt: { type: Number, required: true },
        status: { type: String, required: true, enum: ['pending', 'sell', 'rent'] },
        rentalPeriod: { type: Number }, // in months
        owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    },
    {
        timestamps: true
    }
)
propertySchema.index({ 'flat': 1, 'building': 1, 'street': 1 }, { unique: true });

export const Property = mongoose.model("Property", propertySchema)
