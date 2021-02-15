const Queja = require('../models/quejas');

const guardarQueja = async( payload ) => {
    try {
        const queja = new Queja(payload);
        await queja.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const Quejas = async() => {
    const quejas = await Queja.find();
    return quejas;
}

module.exports = {
    guardarQueja,
    Quejas
}