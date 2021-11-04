import { spoilerRepo } from "./../repositories";

async function create(data){
    return await spoilerRepo.insert(data);
}

async function index(){
    return await spoilerRepo.findaAll();
}

async function show(id){
    return await spoilerRepo.findById(id);
}

async function update(id,data){
    return await spoilerRepo.update(id,data);
}

async function delet(id){
    return await spoilerRepo.delet(id);
}

export default {
    create,
    index,
    show,
    update,
    delet
}