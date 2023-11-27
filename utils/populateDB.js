import mongoose from "mongoose";
import dotenv from "dotenv";
import Listing from "../models/listingModel.js";

dotenv.config();

const db = process.env.MONGO_URI;
console.log(db);

mongoose.connect(db).then(() => console.log("DB connection successful!"));

const listings = [
  {
    name: "Designer 1",
    description: "This is a test designer",
    rating: 4.5,
    projects: 10,
    prices: 500,
    experience: 5,
    contacts: ["123-456-7890", "098-765-4321"],
    isShortlisted: false,
  },
  {
    name: "Designer 2",
    description: "This is another test designer",
    rating: 4.0,
    projects: 15,
    prices: 700,
    experience: 7,
    contacts: ["234-567-8901", "987-654-3210"],
    isShortlisted: true,
  },
  {
    name: "Designer 3",
    description: "Yet another test designer",
    rating: 3.5,
    projects: 20,
    prices: 600,
    experience: 6,
    contacts: ["345-678-9012", "876-543-2109"],
    isShortlisted: false,
  },
  {
    name: "Designer 4",
    description: "And another test designer",
    rating: 4.2,
    projects: 25,
    prices: 800,
    experience: 8,
    contacts: ["456-789-0123", "765-432-1098"],
    isShortlisted: true,
  },
  {
    name: "Designer 5",
    description: "One more test designer",
    rating: 4.7,
    projects: 30,
    prices: 900,
    experience: 9,
    contacts: ["567-890-1234", "654-321-0987"],
    isShortlisted: false,
  },
  {
    name: "Designer 6",
    description: "The last test designer",
    rating: 4.9,
    projects: 35,
    prices: 1000,
    experience: 10,
    contacts: ["678-901-2345", "543-210-9876"],
    isShortlisted: true,
  },
  // Add more designers as necessary
];

const importData = async () => {
  try {
    await Listing.create(listings);
    console.log("Data successfully loaded!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

importData();
