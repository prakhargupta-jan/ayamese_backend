import {Router} from 'express'
import {getShortlisted, toggleShortlisted} from '../controllers/shortlistedController.js'
const shortlistedRouter = Router();

shortlistedRouter.post('/:id', toggleShortlisted)
shortlistedRouter.get('/', getShortlisted)

export default shortlistedRouter;