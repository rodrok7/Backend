
const express = require('express')

const koders = require('../userCases/koders')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allKoders = await koders.getAll()
        response.json({
            success: true,
            message: 'koders cargados',
            data: {
                allKoders
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
        const newKoderData = request.body
        const newKoder =await koders.create(newKoderData)
        response.json({
            success: true,
            data:{
                newKoder
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
        const koderToDelete = await koders.deletee(id)
        response.json({
            success: true,
            data:{
                koderToDelete
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
        const koderUpdated = await koders.update(id,dataToUpdate)
        response.json({
            success: true,
            data: {
                koderUpdated
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



