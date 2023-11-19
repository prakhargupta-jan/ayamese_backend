import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import shortlistedRouter from './routes/shortlistedRouter.js';
import listingsRouter from './routes/listingsRouter.js';
import globalErrorHandler from './utils/globalErrorHandler.js';

const app = express()

app.use(cors({origin: process.env.CLIENT_URL || '*'}))
app.use(morgan('tiny'))


app.use('/listings', listingsRouter)

app.use('/shortlisted', shortlistedRouter)

app.all('*', (req, res) => res.status(404).json({
    status: 'failure',
    error: `${req.url} not found`
}))

app.use(globalErrorHandler)

export default app;