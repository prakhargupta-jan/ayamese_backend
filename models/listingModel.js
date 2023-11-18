import { Schema, model } from 'mongoose'

const listingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        default: 0,
        min: [1, 'Rating must be more than 1'],
        max: [5, 'Rating must be less than 5']
    },
    description: {
        type: String,
        required: true,
    },
    projects: {
        type: Number,
        default: 0
    },
    prices: {
        type: Number,
        default: 0,
        min: [0, 'Prices cannot be negative'],
    },
    experience: {
        type: Number,
        default: 0,
        min: [0, 'Experience cannot be negative'],
    },
    contancts: {
        type: [String]
    },
    isShortlisted: {
        type: Boolean,
        default: false
    }
})

const Listing = model('Listing', listingSchema);
export default Listing;