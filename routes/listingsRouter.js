import {Router} from 'express'
import {getAllListings} from '../controllers/listingsController.js'
const shortlistedRouter = Router();

shortlistedRouter.get('/', getAllListings)

export default shortlistedRouter;