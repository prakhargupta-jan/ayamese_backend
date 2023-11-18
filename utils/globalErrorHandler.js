const globalErrorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV || process.env.NODE_ENV != 'test')
        console.error(err.stack);
    if (err.message.includes('Listing not found')) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        })
    }
    res.status(500).json({
        status: 'error',
        message: 'An unexpected error occured.'
    })
}

export default globalErrorHandler; 