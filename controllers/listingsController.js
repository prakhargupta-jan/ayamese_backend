import Listing from "../models/listingModel.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllListings = catchAsync(async (req, res, next) => {
    const data = await Listing.find();
    res.status(200).json({
        status: '200',
        length: data.length,
        data
    });
})