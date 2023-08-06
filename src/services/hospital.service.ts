import { HospitalRepository } from '../repository/hospital.repository';

export class HospitalService {

    private hospitalRepo: HospitalRepository;

    constructor() {
        this.hospitalRepo = new HospitalRepository();
    }

    async getHospitals() {
        return await this.hospitalRepo.getHospitals();
    }
    async getHospitalsMain() {
        return await this.hospitalRepo.getHospitalsMain();
    }
    

//     async createTask(task) {
//         return await this.taskRepository.createTask(task);
//     }

//     async updateTask(task) {
//         return await this.taskRepository.updateTask(task);
//     }

//     async deleteTask(taskId) {
//         return await this.taskRepository.deleteTask(taskId);
//     }

}