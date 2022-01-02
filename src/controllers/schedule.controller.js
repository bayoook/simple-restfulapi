const responseHelper = require('../helpers/response.helper')
const scheduleModel = require('../models/schedule.model')
const converter = require('../helpers/converter.helper')
const checker = require('../helpers/checker.helper')
const activityModel = require('../models/activity.model')
const methodModel = require('../models/method.model')
const converterHelper = require('../helpers/converter.helper')

class scheduleController{
    async insert(req, res) {
        try {
            const methodID = req.body.method_id
            const activityID = req.body.activity_id
            const startDate = req.body.start_date
            const endDate = req.body.end_date
            if (!methodID || !activityID || !startDate || !endDate) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid input'))
            }

            const checkMethodID = await methodModel.getByID(methodID)
            if (checkMethodID.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data methods with id ${methodID} not found / deleted`))
            }

            const checkActivityID = await activityModel.getByID(activityID)
            if (checkActivityID.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data activity with id ${activityID} not found / deleted`))
            }

            if (endDate < startDate) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid end_date must be bigger then start_date'))
            }

            const newStartDate = converterHelper.epochToTimestamp(startDate)
            const newEndDate = converterHelper.epochToTimestamp(endDate)

            const result = await scheduleModel.insert(methodID, activityID, newStartDate, newEndDate)
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data already existed / deleted`))
            }

            res.status(200).send(responseHelper.success('Success insert data', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }
     
    async getAll(_, res) {
        try {
            const result = await scheduleModel.getAll()
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data schedules not found`))
            }

            res.status(200).send(responseHelper.success('Success', result))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }

    async getByID(req, res) {
        try {
            const id = req.params.scheduleId
            if (!checker.isInt(id)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid parameter ID'))
            }

            const result = await scheduleModel.getByID(id)
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data schedules with id ${id} not found / deleted`))
            }

            res.status(200).send(responseHelper.success('Success', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }

    async getByTime(req, res) {
        try {
            const from = req.body.from
            const to = req.body.to
            if (!checker.isInt(from) || !checker.isInt(to)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid request from / to'))
            }

            if (to < from) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid to must be bigger then from'))
            }

            const newFrom = converterHelper.epochToTimestamp(from)
            const newTo = converterHelper.epochToTimestamp(to)

            const result = await scheduleModel.getByTime(newFrom, newTo)
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data schedules with range (${newFrom} -> ${newTo}) not found / deleted`))
            }

            res.status(200).send(responseHelper.success('Success', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }

    async softDelete(req, res) {
        try {
            const id = req.params.scheduleId
            if (!checker.isInt(id)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid parameter ID'))
            }

            const result = await scheduleModel.softDelete(id)
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data schedules with id ${id} not found / deleted`))
            }

            res.status(200).send(responseHelper.success('Deleted', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }

    async update(req, res) {
        try {
            const id = req.params.scheduleId
            const methodID = req.body.method_id
            const activityID = req.body.activity_id
            const startDate = req.body.start_date
            const endDate = req.body.end_date

            if (!checker.isInt(id)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid parameter ID'))
            }

            if (!methodID || !activityID || !startDate || !endDate) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid input'))
            }

            const checkMethodID = await methodModel.getByID(methodID)
            if (checkMethodID.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data methods with id ${methodID} not found / deleted`))
            }

            const checkActivityID = await activityModel.getByID(activityID)
            if (checkActivityID.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data activity with id ${activityID} not found / deleted`))
            }

            if (endDate < startDate) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid end_date must be bigger then start_date'))
            }

            const newStartDate = converterHelper.epochToTimestamp(startDate)
            const newEndDate = converterHelper.epochToTimestamp(endDate)

            const result = await scheduleModel.update(id, methodID, activityID, newStartDate, newEndDate)
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data schedules with id ${id} not found / deleted`))
            }

            res.status(200).send(responseHelper.success('Updated', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }
    
}

module.exports = new scheduleController()
