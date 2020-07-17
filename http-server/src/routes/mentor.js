const express = require('express')

const mentors = require('../userCases/mentors')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allMentors = await mentors.getAll()
        response.json({
            success: true,
            message: 'mentores cargados',
            data: {
                allMentors
            } 
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success:false,
            error: error.message
        })
    }
})

router.post('/',async (request,response)=>{
    try {
        const newMentorsData = request.body
        const newMentor =await mentors.create(newMentorsData)
        response.json({
            success: true,
            data:{
                newMentor
            }
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success:false,
            error: error.message
        })
    }
})
router.delete('/:id',async (request,response)=>{
    try {
        const id = request.params.id
        const mentorToDelete = await mentors.borrar(id)
        response.json({
            success: true,
            data:{
                mentorToDelete
            },
            message:'Se ha eliminado'
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success: false,
            error: error.message
        })
    }
})
router.patch('/:id',async (request,response)=>{
    try {
        const id = request.params.id
        const dataToUpdate = request.body
        const mentorUpdated = await mentors.update(id,dataToUpdate)
        response.json({
            success: true,
            data: {
                mentorUpdated
            },
            message: 'Se ha actualizado satisfactoriamente'
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success: false,
            error: error.message
        })
    }
})
module.exports = router