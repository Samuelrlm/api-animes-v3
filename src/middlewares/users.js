const { Users } = require("../models");
const bcrypt = require('bcrypt');

async function validateCreateUser(req, res, next){
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).send({
            error: "Todos os campos são obrigatórios"
        })
    }

    if(password.length < 8){
        return res.status(400).send({
            error: "A senha deve ter no mínimo 8 caracteres"
        })
    }

    const existUser = await Users.findOne({
        where: {
            email: email
        }
    })

    if(existUser){
        return res.status(400).send({
            error: "Usuário já cadastrado"
        })
    }

    const hashedPassword = await bcrypt.hash(
        password,
        10
    )

    req.body.password = hashedPassword

    next();
}

module.exports = {
    validateCreateUser
}