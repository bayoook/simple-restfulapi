const knexConf = require('../configs/db');
const knex = require('knex')(knexConf);

const methodDBName = 'methods';

/**
 * use to handle models for methods
 */
class MethodModel {
  /**
   *
   * @param {*} methodName
   * @return {*}
   */
  async insert(methodName) {
    const insertResult = knex(methodDBName)
        .insert({name: methodName})
        .returning('*');
    return insertResult;
  }

  /**
   *
   * @return {*}
   */
  async getAll() {
    const result = knex(methodDBName)
        .select()
        .whereNull('deleted_at');
    return result;
  }

  /**
   *
   * @param {*} id
   * @return {*}
   */
  async getByID(id) {
    const result = knex(methodDBName)
        .select()
        .where({'id': id}).whereNull('deleted_at');
    return result;
  }

  /**
   *
   * @param {*} id
   * @return {*}
   */
  async softDelete(id) {
    const result = knex(methodDBName)
        .update({'deleted_at': knex.fn.now()})
        .where({'id': id, 'deleted_at': null})
        .returning('*');
    return result;
  }

  /**
   *
   * @param {*} id
   * @param {*} methodName
   * @return {*}
   */
  async update(id, methodName) {
    const result = knex(methodDBName)
        .update({'name': methodName, 'updated_at': knex.fn.now()})
        .where({'id': id, 'deleted_at': null})
        .returning('*');
    return result;
  }
}

module.exports = new MethodModel();
