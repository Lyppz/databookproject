module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("items", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        is_flammable: {
            type: Sequelize.BOOLEAN
        }
    });

    return Items; 
};