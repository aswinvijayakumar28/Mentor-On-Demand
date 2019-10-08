package com.example.SkillsService;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SkillsRepository extends CrudRepository<Skills,Long> {
    @Query(value="select * from skills s where s.mentor_id = ?1",nativeQuery = true)
    List<Skills> getMentorSkills(Long mentorId);
}
