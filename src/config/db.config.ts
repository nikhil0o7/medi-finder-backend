/* eslint-disable @typescript-eslint/no-explicit-any */

import { Sequelize } from 'sequelize-typescript'
import { Hospitals } from '../models/hospital.model';
import { HospitalMainService } from '../models/hospitalMain.model';

export const connect = () => {

    const hostName = "localhost";
    const userName = "postgres";
    const password = "2021";
    const database = "medi-finder";
    const dialect: any = "postgres";

    // console.log('dialect', dialect)

    const operatorsAliases: any = 0;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
  
    sequelize.addModels([Hospitals]);
    sequelize.addModels([HospitalMainService]);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

}
