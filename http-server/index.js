const dbConnect = require('./src/lib/db')
const server = require('./src/server')
dbConnect()
 .then(()=>{
     console.log('Data Base on line')
     server.listen(8080,()=>{
         console.log('Connected')
     })
 })
 .catch(error =>{
     console.error('Error: ',error)
 })