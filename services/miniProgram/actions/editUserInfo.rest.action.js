const _ = require('lodash');

const { MoleculerError } = require('moleculer').Errors;
const JsonWebToken = require('jsonwebtoken');
//const MiniProgramConstant = require('../constants/MiniProgramInfoConstant');

module.exports = async function (ctx) {
    try {

        const payload = ctx.params.body;
        const obj = {
            name: payload.name,
            email: payload.email,
            gender: payload.gender,
            avatar: payload.avatar,
        };
        let userInfo = await this.broker.call('v1.MiniProgramUserModel.findOneAndUpdate', [{
            id: ctx.meta.auth.data.id,
        }, {
            name: obj.name,
            phone: obj.phone,
            gender: obj.gender,
            avatar: obj.avatar
        }])
        //console.log('miniProgramInfo', ctx.meta.auth)

        return {
            code: 1000,
            message: 'Cập nhập thông tin người dùng thành công',
        };
    } catch (err) {
        if (err.name === 'MoleculerError') throw err;
        throw new MoleculerError(`[MiniProgram1] Add: ${err.message}`);
    }
};
