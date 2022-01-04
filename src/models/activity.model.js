const knexConf = require('../configs/db');
const knex = require('knex')(knexConf);

const activityDBName = 'activities';

/**
 * use for models
 */
class ActivityModel {
  /**
   * use to insert data to databases
   * @param {*} activityName
   * @return {*}
   */
  async insert(activityName) {
    const insertResult = knex(activityDBName)
        .insert({name: activityName})
        .returning('*');
    return insertResult;
  }

  /**
   * use to getAll data from databases
   * @return {*}
   */
  async getAll() {
    const result = knex(activityDBName)
        .select()
        .whereNull('deleted_at');
    return result;
  }

  /**
   * use to get data by id from databases
   * @param {*} id
   * @return {*}
   */
  async getByID(id) {
    const result = knex(activityDBName)
        .select()
        .where({'id': id}).whereNull('deleted_at');
    return result;
  }

  /**
   * use to delete data by id from databases
   * @param {*} id
   * @return {*}
   */
  async softDelete(id) {
    const result = knex(activityDBName)
        .update({'deleted_at': knex.fn.now()})
        .where({'id': id, 'deleted_at': null})
        .returning('*');
    return result;
  }

  /**
   * use to update data by id from databases
   * @param {*} id
   * @param {*} activityName
   * @return {*}
   */
  async update(id, activityName) {
    const result = knex(activityDBName)
        .update({'name': activityName, 'updated_at': knex.fn.now()})
        .where({'id': id, 'deleted_at': null})
        .returning('*');
    return result;
  }
}

module.exports = new ActivityModel();
