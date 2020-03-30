const connection = require('../database/connection');
const generateUniqueid = require('../utils/generateUniqueId');

module.exports = {
    // cadastrar nova ong
    async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    
    const id = generateUniqueid();
    
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return response.json({ id });
    },

    // listar ongs
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    
    },
}