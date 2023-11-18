import Listing from "../models/listingModel.js"
import catchAsync from '../utils/catchAsync.js';

export const getShortlisted = catchAsync(async (req, res, next) => {
    const data = await Listing.find({isShortlisted: true});
    res.status(200).json({
        status: 'success',
        length: data.length,
        data
    })
})

export const toggleShortlisted = catchAsync(async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        next(new Error(`Listing not found with the given id : ${req.params.id}`))
    }
    listing.isShortlisted = !listing.isShortlisted;
    await listing.save();
    res.status(200).json({
        satus: 'success',
        data: listing
    })
})