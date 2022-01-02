const responseHelper = require('../helpers/response.helper')
const activityModel = require('../models/activity.model')
const converter = require('../helpers/converter.helper')
const checker = require('../helpers/checker.helper')

class activityController{
    async insert(req, res) {
        try {
            const activityName = req.body.name
            if (!activityName) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid name'))
            }

            const result = await activityModel.insert(activityName)
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
            const result = await activityModel.getAll()
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data activities not found`))
            }

            res.status(200).send(responseHelper.success('Success', result))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }

    async getByID(req, res) {
        try {
            const id = req.params.activityId
            if (!checker.isInt(id)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid parameter ID'))
            }

            const result = await activityModel.getByID(id)
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data activities with id ${id} not found / deleted`))
            }

            res.status(200).send(responseHelper.success('Success', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }

    async softDelete(req, res) {
        try {
            const id = req.params.activityId
            if (!checker.isInt(id)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid parameter ID'))
            }

            const result = await activityModel.softDelete(id)
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data activities with id ${id} not found / deleted`))
            }

            res.status(200).send(responseHelper.success('Deleted', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }
    
    async update(req, res) {
        try {
            const id = req.params.activityId
            const activityName = req.body.name
            if (!checker.isInt(id)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid parameter ID'))
            }

            if (!activityName) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid name'))
            }

            const result = await activityModel.update(id, activityName)
            if (result.length < 1) {
                return res.status(404).send(responseHelper.fail('error', `Data activities with id ${id} not found / deleted`))
            }

            res.status(200).send(responseHelper.success('Updated', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'))
        }
    }
    
}

module.exports = new activityController()
