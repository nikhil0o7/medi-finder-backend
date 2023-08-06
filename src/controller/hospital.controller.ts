import { HospitalService } from '../services/hospital.service';


export class HospitalController {
    private hospitalService: HospitalService;

    constructor() {
        this.hospitalService = new HospitalService();
    }

    async getHospitals() {
        // this.logger.info('Controller: getTasks', null)
        return await this.hospitalService.getHospitals();
    }

    async getHospitalMain(){
        return await this.hospitalService.getHospitalsMain();

    }

}

