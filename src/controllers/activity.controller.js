const responseHelper = require('../helpers/response.helper');
const activityModel = require('../models/activity.model');
const checker = require('../helpers/checker.helper');

/**
 * Used to handle the request for activity
 */
class ActivityController {
  /**
   * Handle response for specific endpoint.
   * @param {any} req the request object.
   * @param {any} res the response object.
   * @return {any} the response object
   */
  async insert(req, res) {
    try {
      const activityName = req.body.name;
      if (!activityName) {
        return res.status(400).send(
            responseHelper.fail('error', 'Invalid name'));
      }

      const result = await activityModel.insert(activityName);
      if (result.length < 1) {
        return res.status(404).send(
            responseHelper.fail('error', `Data already existed / deleted`));
      }

      res.status(200).send(
          responseHelper.success('Success insert data', result[0]));
    } catch (error) {
      console.log(error);
      res.status(500).send(
          responseHelper.fail('error', 'Internal Server Error'));
    }
  }

  /**
   * Handle response for specific endpoint.
   * @param {any} _ the request object.
   * @param {any} res the response object.
   * @return {any} the response object
   */
  async getAll(_, res) {
    try {
      const result = await activityModel.getAll();
      if (result.length < 1) {
        return res.status(404).send(
            responseHelper.fail('error', `Data activities not found`));
      }

      res.status(200).send(responseHelper.success('Success', result));
    } catch (error) {
      console.log(error);
      res.status(500).send(
          responseHelper.fail('error', 'Internal Server Error'));
    }
  }

  /**
   * Handle response for specific endpoint.
   * @param {any} req the request object.
   * @param {any} res the response object.
   * @return {any} the response object
   */
  async getByID(req, res) {
    try {
      const id = req.params.activityId;
      if (!checker.isInt(id)) {
        return res.status(400).send(
            responseHelper.fail('error', 'Invalid parameter ID'));
      }

      const result = await activityModel.getByID(id);
      if (result.length < 1) {
        return res.status(404).send(
            responseHelper.fail(
                'error', `Data activities with id ${id} not found / deleted`));
      }

      res.status(200).send(responseHelper.success('Success', result[0]));
    } catch (error) {
      console.log(error);
      res.status(500).send(
          responseHelper.fail('error', 'Internal Server Error'));
    }
  }

  /**
   * Handle response for specific endpoint.
   * @param {any} req the request object.
   * @param {any} res the response object.
   * @return {any} the response object
   */
  async softDelete(req, res) {
    try {
      const id = req.params.activityId;
      if (!checker.isInt(id)) {
        return res.status(400).send(
            responseHelper.fail('error', 'Invalid parameter ID'));
      }

      const result = await activityModel.softDelete(id);
      if (result.length < 1) {
        return res.status(404).send(
            responseHelper.fail(
                'error', `Data activities with id ${id} not found / deleted`));
      }

      res.status(200).send(responseHelper.success('Deleted', result[0]));
    } catch (error) {
      console.log(error);
      res.status(500).send(
          responseHelper.fail('error', 'Internal Server Error'));
    }
  }

  /**
   * Handle response for specific endpoint.
   * @param {any} req the request object.
   * @param {any} res the response object.
   * @return {any} the response object
   */
  async update(req, res) {
    try {
      const id = req.params.activityId;
      const activityName = req.body.name;
      if (!checker.isInt(id)) {
        return res.status(400).send(
            responseHelper.fail('error', 'Invalid parameter ID'));
      }

      if (!activityName) {
        return res.status(400).send(
            responseHelper.fail('error', 'Invalid name'));
      }

      const result = await activityModel.update(id, activityName);
      if (result.length < 1) {
        return res.status(404).send(
            responseHelper.fail(
                'error', `Data activities with id ${id} not found / deleted`));
      }

      res.status(200).send(responseHelper.success('Updated', result[0]));
    } catch (error) {
      console.log(error);
      res.status(500).send(
          responseHelper.fail('error', 'Internal Server Error'));
    }
  }
}

module.exports = new ActivityController();
