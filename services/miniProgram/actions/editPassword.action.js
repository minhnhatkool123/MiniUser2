const _ = require('lodash');

const { MoleculerError } = require('moleculer').Errors;
const JsonWebToken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//const MiniProgramConstant = require('../constants/MiniProgramInfoConstant');

module.exports = async function (ctx) {
    try {

        if (!ctx.meta.auth.data.password) {
            return {
                code: 1001,
                message: 'Cập nhập mật khẩu thất bại',
            };
        }

        const payload = ctx.params.body;
        const obj = {
            password: payload.password,
            newPassword: payload.newPassword,
        };
        // let userInfo = await this.broker.call('v1.MiniProgramUserModel.findOne', [{
        //     id: ctx.meta.auth.data.id,
        // }])


        const isMatchPassword = await bcrypt.compare(obj.password, ctx.meta.auth.data.password);
        if (!isMatchPassword) {
            return {
                code: 1001,
                message: 'Cập nhập mật khẩu thất bại',
            };
        }
        const hashPassword = await bcrypt.hash(obj.newPassword, 10);

        await this.broker.call('v1.MiniProgramUserModel.findOneAndUpdate', [{
            id: ctx.meta.auth.data.id,
        }, {
            password: hashPassword
        }])


        return {
            code: 1000,
            message: 'Cập nhập mật khẩu người dùng thành công',
        };
    } catch (err) {
        if (err.name === 'MoleculerError') throw err;
        throw new MoleculerError(`[MiniProgram1] Add: ${err.message}`);
    }
};
