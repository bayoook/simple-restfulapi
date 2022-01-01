const responseHelper = require('../helpers/response.helper');
const methodModel = require('../models/method.model')
const converter = require('../helpers/converter.helper')
const checker = require('../helpers/checker.helper')

class methodController{
    async insert(req, res) {
        try {
            const methodName = req.body.name
            if (!methodName) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid name'));
            }
            const result = await methodModel.insert(methodName)
            if (result.length < 1) {
                res.status(404).send(responseHelper.fail('error', `Data already existed / deleted`))
            }
            res.status(200).send(responseHelper.success('Success insert data', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'));
        }
    }
    async batchInsert(req, res) {
        try {
            const methodNames = req.body.names
            if (!methodNames) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid name'));
            }
            
            const arrMethodName = converter.arrayToArrayOfObject('name', methodNames)
            const result = await methodModel.batchInsert(arrMethodName)
            res.status(200).send(responseHelper.success('Success insert data', result))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'));
        }
    }
    async getAll(_, res) {
        try {
            const result = await methodModel.getAll();
            if (result.length < 1) {
                res.status(404).send(responseHelper.fail('error', `Data methods not found`))
            }
            res.status(200).send(responseHelper.success('Success', result))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'));
        }
    }
    async getByID(req, res) {
        try {
            const id = req.params.methodId;
            if (!checker.isInt(id)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid parameter ID'));
            }
            const result = await methodModel.getByID(id);
            if (result.length < 1) {
                res.status(404).send(responseHelper.fail('error', `Data methods with id ${id} not found / deleted`))
            }
            res.status(200).send(responseHelper.success('Success', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'));
        }
    }
    async softDelete(req, res) {
        try {
            const id = req.params.methodId;
            if (!checker.isInt(id)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid parameter ID'));
            }
            const result = await methodModel.softDelete(id);
            if (result.length < 1) {
                res.status(404).send(responseHelper.fail('error', `Data methods with id ${id} not found / deleted`))
            }
            res.status(200).send(responseHelper.success('Deleted', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'));
        }
    }
    async update(req, res) {
        try {
            const id = req.params.methodId;
            const methodName = req.body.name
            if (!checker.isInt(id)) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid parameter ID'));
            }
            if (!methodName) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid name'));
            }
            const result = await methodModel.update(id, methodName);
            if (result.length < 1) {
                res.status(404).send(responseHelper.fail('error', `Data methods with id ${id} not found / deleted`))
            }
            res.status(200).send(responseHelper.success('Updated', result[0]))
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'));
        }
    }
    
}

module.exports = new methodController();
