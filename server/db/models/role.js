'use strict';
const { Model } = require('sequelize');
const { remap } = require('../../utils/db-utils');
const roleSchema = require('../schema/role');

module.exports = (sequelize, DataTypes) => {
	class Role extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Role.init(remap(DataTypes, roleSchema), {
		sequelize,
		modelName: 'Role',
		tableName: 'roles'
	});
	return Role;
};
