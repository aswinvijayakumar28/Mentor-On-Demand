package com.example.TrainingService;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TrainingRepository extends CrudRepository<Trainings,Long> {
    @Query(value="select * from trainings t where t.user_id = ?1  and t.status = ?2",nativeQuery = true)
    List<Trainings> searchUserTrainings(Long userId, String status);

    @Query(value="select * from trainings t where t.mentor_id = ?1 and t.status = ?2",nativeQuery = true)
    List<Trainings> searchMentorTrainings(Long mentorId, String status);
}
