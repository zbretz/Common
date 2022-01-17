const adminSchema = {
	id: {
		type: 'INTEGER',
		primaryKey: true,
		autoIncrement: true
	},
	user_id: {
		type: 'UUID',
		allowNull: false,
		references: {
			model: 'users',
			key: 'id',
			onDelete: 'CASCADE'
		}
	},
	name: {
		type: 'STRING',
		allowNull: false
	}
};

module.exports = { adminSchema };
