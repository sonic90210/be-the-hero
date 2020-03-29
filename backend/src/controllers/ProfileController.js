const connection = require ('../database/connection');

module.exports = {
    // listar casos específicos de uma ong
    async index(request, response) {
        const ong_id = request.headers.authorization;
        
        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);
    
    },
}