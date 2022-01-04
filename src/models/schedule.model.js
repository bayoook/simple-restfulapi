const knexConf = require('../configs/db');
const knex = require('knex')(knexConf);

const scheduleDBName = 'schedules';

/**
 * use to handle schedule models
 */
class ScheduleModel {
  /**
   *
   * @param {*} methodsID
   * @param {*} activityID
   * @param {*} startDate
   * @param {*} endDate
   * @return {*}
   */
  async insert(methodsID, activityID, startDate, endDate) {
    const insertResult = knex(scheduleDBName)
        .insert({
          'method_id': methodsID,
          'activity_id': activityID,
          'start_date': startDate,
          'end_date': endDate,
        })
        .returning('*');
    return insertResult;
  }

  /**
   *
   * @return {*}
   */
  async getAll() {
    const result = knex(scheduleDBName)
        .select(
            'schedules.id', 'method_id', 'methods.name as method_name',
            'activity_id', 'activities.name as activity_name',
            'start_date', 'end_date', 'schedules.created_at',
            'schedules.updated_at', 'schedules.deleted_at')
        .leftJoin('methods', 'schedules.method_id', 'methods.id')
        .leftJoin('activities', 'schedules.activity_id', 'activities.id')
        .whereNull('schedules.deleted_at').whereNull('methods.deleted_at')
        .whereNull('activities.deleted_at')
        .orderBy('start_date');
    return result;
  }

  /**
   *
   * @param {*} from
   * @param {*} to
   * @return {*}
   */
  async getByTime(from, to) {
    const result = knex(scheduleDBName)
        .select(
            'schedules.id', 'method_id', 'methods.name as method_name',
            'activity_id', 'activities.name as activity_name',
            'start_date', 'end_date', 'schedules.created_at',
            'schedules.updated_at', 'schedules.deleted_at')
        .leftJoin('methods', 'schedules.method_id', 'methods.id')
        .leftJoin('activities', 'schedules.activity_id', 'activities.id')
        .where('start_date', '>', from).where('end_date', '<', to)
        .whereNull('schedules.deleted_at').whereNull('methods.deleted_at')
        .whereNull('activities.deleted_at')
        .orderBy('start_date');
    return result;
  }

  /**
   *
   * @param {*} id
   * @return {*}
   */
  async getByID(id) {
    const result = knex(scheduleDBName)
        .select(
            'schedules.id', 'method_id', 'methods.name as method_name',
            'activity_id', 'activities.name as activity_name',
            'start_date', 'end_date', 'schedules.created_at',
            'schedules.updated_at', 'schedules.deleted_at')
        .leftJoin('methods', 'schedules.method_id', 'methods.id')
        .leftJoin('activities', 'schedules.activity_id', 'activities.id')
        .where({'schedules.id': id})
        .whereNull('schedules.deleted_at').whereNull('methods.deleted_at')
        .whereNull('activities.deleted_at');
    return result;
  }

  /**
   *
   * @param {*} id
   * @return {*}
   */
  async softDelete(id) {
    const result = knex(scheduleDBName)
        .update({'deleted_at': knex.fn.now()})
        .where({'id': id, 'deleted_at': null})
        .returning('*');
    return result;
  }

  /**
   *
   * @param {*} id
   * @param {*} methodsID
   * @param {*} activityID
   * @param {*} startDate
   * @param {*} endDate
   * @return {*}
   */
  async update(id, methodsID, activityID, startDate, endDate) {
    const result = knex(scheduleDBName)
        .update({
          'method_id': methodsID,
          'activity_id': activityID,
          'start_date': startDate,
          'end_date': endDate,
          'updated_at': knex.fn.now(),
        })
        .where({'id': id, 'deleted_at': null})
        .returning('*');
    return result;
  }
}

module.exports = new ScheduleModel();
