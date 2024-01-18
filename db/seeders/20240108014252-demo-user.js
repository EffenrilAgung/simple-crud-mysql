'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					id: 'f3ace7f0-70b2-40a5-a95d-0db96df859dc',
					fullName: 'John Doe',
					email: 'jhon@example.com',
					password: '123456',
					role: 'admin',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: '1fb12a15-95af-4dc9-8655-f882418c91ff',
					fullName: 'Alex Doe',
					email: 'alex@example.com',
					password: '123456',
					role: 'admin',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
