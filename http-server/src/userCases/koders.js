const koders = require('../modules/koders')

function getAll(){
    return koders.find()
}

function create(koderData){
    return koders.create(koderData)
}

function borrar(koderId){
    return koders.findByIdAndRemove(koderId)
}

function update(koderId, dataUpdate){
    return koders.findByIdAndUpdate(koderId, dataUpdate)
}

module.exports = (getAll, create, borrar, update)