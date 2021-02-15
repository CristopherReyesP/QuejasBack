const { Schema, model } = require('mongoose');

const QuejaSchema = Schema({
    nombre:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    queja:{
        type: String,
        require:true,
    }
},{
    timestamps: true
});

QuejaSchema.method('toJSON', function(){

    const{__V,  ...object } = this.toObject();
    return object;
})

module.exports = model('Queja', QuejaSchema);