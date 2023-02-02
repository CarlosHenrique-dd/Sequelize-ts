import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
	freezeTableName: true,
	timestamps: false,
})
export class User extends Model {
	@Column({
		type: DataType.STRING(40),
		allowNull: false,
		autoIncrement: true,
	})
	id!: string;
	@Column({
		type: DataType.STRING(60),
		allowNull: false,
		unique: true,
	})
	email!: string;
}
