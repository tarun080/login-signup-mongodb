const model = require('../model/userInfo')

exports.signup = async (req, res) => {
    try {
        const {username, phone, email, password} = req.body
        const repeatEmail = await model.findOne({email: email})
        if(repeatEmail) {
            res.status(400).json({message: "user Email already exists!!"})
            return
        }

        const repeatPhone = await model.findOne({phone: phone})
        if(repeatPhone) {
            res.status(400).json({message: "user phone no. already exists!!"})
            return
        }

        const userCreate = await model.create({username, phone, email, password})

        if(!userCreate) {
            res.status(400).json({message: 'Sign Up Failed!'})
            return
        } 

        if(userCreate) {
            res.status(200).json({message: 'User Signed Up', userCreate})
            return
        } 
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'User Sign Up is not possible!!'})
    }
}

exports.login = async (req, res) => {
    try {    
        const {username, password} = req.body
        const checkname = await model.findOne({username: username})
        if(!checkname) {
            res.status(400).json({message: "Entered wrong username!!"})
            return
        }

        const checkpassword = await model.findOne({password: password})
        if(!checkpassword) {
            res.status(400).json({message: "Entered wrong password!!"})
            return
        }

        res.status(400).json({message: "Login Successful"})       
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'Login Failed'})
    }
}

exports.udpateById = async (req, res) => {
    try {
        const updateId = await model.findByIdAndUpdate(req.params.id, req.body, {
            new : true
        })   
        
        if(!updateId) {
            res.status(400).json({message: 'user not found!!!(update)'})
            return
        } 

        if(updateId) {
            res.status(200).json({message: 'user detail updated', updateId})
            return
        }
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'updateById is not possible!!'})
    }
}

exports.deleteById = async (req, res) => {
    try {
        const deleteId = await model.findByIdAndDelete(req.params.id)   //params: data from url
        
        if(!deleteId) {
            res.status(400).json({message: 'user not found!!!(delete)'})
            return
        } 

        if(deleteId) {
            res.status(200).json({message: 'user deleted', deleteId})
            return
        }
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'deleteById is not possible!!'})
    }
}