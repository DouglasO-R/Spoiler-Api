import { Spoiler } from "./../models";

async function insert(spoiler) {
    return await Spoiler.create(spoiler);
}

async function findaAll() {
    return await Spoiler.findAll({});
}

async function findById(id) {
    return await Spoiler.findByPk(id);
}

async function findByTitle(title) {
    return await Spoiler.findOne({ where: { title } });
}

async function update(id, spoiler) {

    await Spoiler.update(spoiler, { where: { id } });
    return await findById(id);
}

async function delet(id) {
    return await Spoiler.destroy({ where: { id } });
}

export default {
    insert,
    findaAll,
    findById,
    findByTitle,
    update,
    delet
}