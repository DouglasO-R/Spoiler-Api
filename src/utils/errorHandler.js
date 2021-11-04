export default async function errorHandler(error,req,res,next){
    res.status(error.status || 404);
    logger.error(error);
    res.json({
        status:error.status,
        message:error.message,
    });
}