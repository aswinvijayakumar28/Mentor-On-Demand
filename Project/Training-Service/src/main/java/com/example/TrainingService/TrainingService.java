package com.example.TrainingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TrainingService {

    @Autowired
    TrainingRepository trainingRepository;

    public void addTraining(Trainings t) {

        trainingRepository.save(t);

    }

    public List<Trainings> getTrainings(){
        List<Trainings> trainings = new ArrayList<Trainings>();
        trainingRepository.findAll().forEach(trainings::add);
        return trainings;
    }

    public Trainings getTrainings(Long id) {

        return trainingRepository.findById(id).orElse(null);
    }
    public List<Trainings> getUserTrainings(Long userId,String status) {

        return trainingRepository.searchUserTrainings(userId,status);
    }

    public List<Trainings> getMentorTrainings(Long mentorId,String status) {

        return trainingRepository.searchMentorTrainings(mentorId,status);
    }



    public void updateTraining(Trainings t , Long id) {

        trainingRepository.save(t);

    }

    public void deleteTraining(Long id) {

        trainingRepository.deleteById(id);
    }
}
