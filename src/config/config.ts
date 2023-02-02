import { Sequelize } from 'sequelize-typescript';
import { User } from '../model/User';

const sequelize = new Sequelize({
	database: 'crud',
	dialect: 'postgres',
	username: 'postgres',
	password: '221001',
	host: 'localhost',
	models: ['../model'],
});

sequelize.addModels([User]);
