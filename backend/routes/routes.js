const express = require('express')
const router = express.Router()
const singupTemplate = require('../modles/SingUpModles')



router.post('/singup', (request, response) => {
    const singedUpUser = new singupTemplate({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:request.body.password,
        
    })
    singedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router

