const knexConf = require('../configs/db');
const knex = require('knex')(knexConf);

const methodDBName = 'methods';

class methodModel{
    async insert(methodName) {
        const insert_result = knex(methodDBName)
            .insert({ name: methodName })
            .returning('*')
        return insert_result
    }
    async batchInsert(arrMethodName) {
        const insert_result = knex(methodDBName)
            .insert(arrMethodName)
            .returning('*')
        return insert_result
    }
    async getAll() {
        const result = knex(methodDBName)
            .select()
            .whereNull('deleted_at')
        return result
    }
    async getByID(id) {
        const result = knex(methodDBName)
            .select()
            .where({'id': id}).whereNull('deleted_at')
        return result
    }
    async softDelete(id) {
        const result = knex(methodDBName)
            .update({'deleted_at': knex.fn.now()})
            .where({'id': id, 'deleted_at': null})
            .returning('*')
        return result
    }
    async update(id, methodName) {
        const result = knex(methodDBName)
            .update({'name': methodName, 'updated_at': knex.fn.now()})
            .where({'id': id, 'deleted_at': null})
            .returning('*')
        return result
    }
}

module.exports = new methodModel()