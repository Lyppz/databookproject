const db = require("../models");
const Item = db.Items;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({
            message: "O Conteúdo não pode ser vazio!"
        })
    return;    
    }

    const item = {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        is_flammabe: req.body.is_flammabe ? req.body. isFlammabe : false
    }

    Items.create(item)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Ocorreu um erro ao criar o item."
        })
    })
};

exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? {name: { [Op.like]: `%${name}$` } } : null;

    Item.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Ocorreu um erro ao listar os itens."
        })
    })
};

exports.findOne = (req, res) => {
    const id = req.params.id;
        
    Item.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Não foi possível encontrar m item com o id =${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentr encontrar um item com o id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Item.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num==1) {
                res.send({
                    message: "O item foi atualizado de maneira bem sucedida."
                });
            } else {
                res.sed({
                    message: `Não foi possível atualizar o item com o id=${id}.`
                });
            }
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Item.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num ==1) {
            res.send({
                message: "O item foi apagado com sucesso!"
            });
            } else {
                res.send({
                    message: `Não foi possível apagar o item com o id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Ocorreu um erro ao tentar apagar o o item com o id=${id}`
            });
        });
};

exports.deleteAll = (req, res) => {

};

exports.findAllFlammabes = (req, res) => {

};