import { spoilerService } from "./../services";
import CreateHttpError from "http-errors";
import { validate } from "./../utils/spoilerValidation";

async function create(req, res, next) {
    try {
        const body = req.body;

        const spoiler = await spoilerService.create(body);
        res.status(201).json(spoiler);
        logger.info(`status: ${res.statusCode} - method: ${req.method} - baseUrl: ${req.baseUrl} - url: ${req.url}`);

    } catch (error) {
        next(CreateHttpError(400, error))
    }
}

async function index(req, res, next) {
    try {
        const spoiler = await spoilerService.index();
        res.status(200).json(spoiler);
        logger.info(`status: ${res.statusCode} - method: ${req.method} - baseUrl: ${req.baseUrl} - url: ${req.url}`);

    } catch (error) {
        next(CreateHttpError(400, error))

    }
}

async function show(req, res, next) {
    try {
        const { id } = req.params;
        const spoiler = await spoilerService.show(id);
        res.status(200).json(spoiler);
        logger.info(`status: ${res.statusCode} - method: ${req.method} - baseUrl: ${req.baseUrl} - url: ${req.url}`);

    } catch (error) {
        next(CreateHttpError(400, error))

    }
}

async function update(req, res, next) {
    try {
        const body = req.body;
        const { id } = req.params;
        const spoiler = await spoilerService.update(id, body);
        res.status(200).json(spoiler);
        logger.info(`status: ${res.statusCode} - method: ${req.method} - baseUrl: ${req.baseUrl} - url: ${req.url}`);

    } catch (error) {
        next(CreateHttpError(422, error))

    }
}

async function delet(req, res, next) {
    try {
        const { id } = req.params;
        const spoiler = await spoilerService.delet(id);
        res.status(200).json(`Deleted ${id}`);
        logger.info(`status: ${res.statusCode} - method: ${req.method} - baseUrl: ${req.baseUrl} - url: ${req.url}`);

    } catch (error) {
        next(CreateHttpError(400, error))

    }
}

export default {
    create,
    index,
    show,
    update,
    delet
}