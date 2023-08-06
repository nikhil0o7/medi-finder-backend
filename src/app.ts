import * as bodyParser from "body-parser";
import { HospitalController } from "./controller/hospital.controller";
import 'dotenv/config'
// import { Hospitals } from "./models/task.model";
import express, { Request, Response } from "express";

class App {

    public express: express.Application;
    public hospitalController: HospitalController;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.hospitalController = new HospitalController();
    }

       // Configure Express middleware.
       private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    

    private routes(): void {

        this.express.get('/api/hospitals', async (req: Request, res: Response) => {
            // const allHospitals: Hospitals[] = await Hospitals.findAll();
            // return res.status(200).json(allHospitals);
            this.hospitalController.getHospitals().then((data: unknown) => res.json(data));
        });

        this.express.get('/api/hospitalsMain', async (req: Request, res: Response) => {
            // const allHospitals: Hospitals[] = await Hospitals.findAll();
            // return res.status(200).json(allHospitals);
            this.hospitalController.getHospitalMain().then((data: unknown) => res.json(data));
        });
        
        // this.express.post('/api/task', (req, res) => {
        //     console.log(req.body);
        //     this.taskController.createTask(req.body.task).then((data: any) => res.json(data));
        // });
        
        // this.express.put('/api/task', (req, res) => {
        //     this.taskController.updateTask(req.body.task).then((data: any) => res.json(data));
        // });
        
        // this.express.delete('/api/task/:id', (req, res) => {
        //     this.taskController.deleteTask(req.params.id).then((data: any) => res.json(data));
        // });

        this.express.get("/", (req, res) => {
          res.send("Typescript App works!!");
        });

    }

}

export default new App().express;
