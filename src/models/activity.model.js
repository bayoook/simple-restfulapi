const knexConf = require('../configs/db')
const knex = require('knex')(knexConf)

const activityDBName = 'activities'

class activityModel{
    async insert(activityName) {
        const insert_result = knex(activityDBName)
            .insert({ name: activityName })
            .returning('*')
        return insert_result
    }

    async getAll() {
        const result = knex(activityDBName)
            .select()
            .whereNull('deleted_at')
        return result
    }

    async getByID(id) {
        const result = knex(activityDBName)
            .select()
            .where({'id': id}).whereNull('deleted_at')
        return result
    }

    async softDelete(id) {
        const result = knex(activityDBName)
            .update({'deleted_at': knex.fn.now()})
            .where({'id': id, 'deleted_at': null})
            .returning('*')
        return result
    }
    
    async update(id, activityName) {
        const result = knex(activityDBName)
            .update({'name': activityName, 'updated_at': knex.fn.now()})
            .where({'id': id, 'deleted_at': null})
            .returning('*')
        return result
    }
}

module.exports = new activityModel()