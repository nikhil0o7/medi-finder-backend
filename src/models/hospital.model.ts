import { Table, Column, Model, DataType } from 'sequelize-typescript'


@Table({
    timestamps: false,
    tableName: "hospital_information",
 })
export class Hospitals extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey:true
    })
    id!: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    provider_id!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    ownership!: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    overall_rating!: number

  
}