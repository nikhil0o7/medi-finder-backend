/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "../config/db.config";
import { Hospitals } from "../models/hospital.model";
import { HospitalMainService } from "../models/hospitalMain.model";

export class HospitalRepository {

    private db: any = {};
    private hospitalRespository: any;
    private hospitalMainRepository: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.authenticate()
            .then(() => {
    console.log('Connection has been established successfully.');
        }).catch((err: any) => {
    console.error('Unable to connect to the database:', err);
});
        this.db.sequelize.sync({force:false, alter : true}).then(() => {
            console.log("Drop and re-sync db. :(");
        });
        this.hospitalRespository = this.db.sequelize.getRepository(Hospitals);
        this.hospitalMainRepository = this.db.sequelize.getRepository(HospitalMainService);
    }

    async getHospitals() {
        
        try {
            const hospitals = await this.hospitalRespository.findAll();
            // console.log('hospitals:::', hospitals);
            return hospitals;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getHospitalsMain() {
        
        try {
            const hospitals_main = await this.hospitalMainRepository.findAll();
            // console.log('hospitals names:::', hospitals_main);
            return hospitals_main;
        } catch (err) {
            console.log(err);
            return [];
        }
    }


}