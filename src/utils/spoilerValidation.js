import joi from "joi";
import CreateHttpError from "http-errors";

const Schema = new joi.object({
    titulo:
        joi.string()
            .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/)
            .min(5)
            .max(30)
            .required()
    ,
    espoliador:
        joi.string()
            .alphanum()
            .min(5)
            .max(30)
            .required()
    ,
    descricao:
        joi.string()
            .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/)
            .min(5)
            .max(30)
            .required()
    ,
}).options({ abortEarly: false});

async function validateMiddleware(req, res, next) {
    try {
        const value = await Schema.validateAsync(req.body);
        next();
    } catch (error) {
        next(CreateHttpError(400, error));
    }
}


export { validateMiddleware };