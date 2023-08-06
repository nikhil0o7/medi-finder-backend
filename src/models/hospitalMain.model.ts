import { Table, Column, Model, DataType } from 'sequelize-typescript'


@Table({
    timestamps: false,
    tableName: "hospitals",
 })
export class HospitalMainService extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey:true
    })
    provider_id!: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type!: string

    @Column({
        type: DataType.BIGINT,
        allowNull: false,
    })
    phone_number!: number

  
}