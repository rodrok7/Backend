const mentors = require('../modules/mentors')

function getAll(){
    return mentors.find()
}

function create(mentorsData){
    return mentors.create(mentorsData)
}

function borrar(mentorsId){
    return mentors.findByIdAndRemove(mentorsId)
}

function update(mentorsId, dataUpdate){
    return mentors.findByIdAndUpdate(mentorsId, dataUpdate)
}

module.exports = (getAll, create, borrar, update)