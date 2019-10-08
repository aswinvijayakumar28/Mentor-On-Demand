package com.example.TrainingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TrainingResource {

    @Autowired
    TrainingService trainingService;

    @RequestMapping(method= RequestMethod.POST,value="/user/trainings")
    public void addTraining(@RequestBody Trainings t) {
        trainingService.addTraining(t);
    }

    @RequestMapping("trainings")
    public List<Trainings> getTrainings(){
        return trainingService.getTrainings();
    }

    @RequestMapping("trainings/{id}")
    public Trainings getTrainings(@PathVariable Long id){
        return trainingService.getTrainings(id);
    }

    @RequestMapping("userTrainings/{userId}/{status}")
    public List<Trainings> getUserTrainings(@PathVariable Long userId,@PathVariable String status){
        return trainingService.getUserTrainings(userId,status);
    }

    @RequestMapping("mentorTrainings/{mentorId}/{status}")
    public List<Trainings> getMentorTrainings(@PathVariable Long mentorId, @PathVariable String status){
        return trainingService.getMentorTrainings(mentorId,status);
    }

    @RequestMapping(method=RequestMethod.PUT,value="/user/trainings/{id}")
    public void updateTopic(@RequestBody Trainings t, @PathVariable Long id){
        trainingService.updateTraining(t, id);
    }



    @RequestMapping(method= RequestMethod.DELETE,value="/user/trainings/{id}")
    public void deleteTraining(@PathVariable Long id){
        trainingService.deleteTraining(id);
    }

}
