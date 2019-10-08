package com.example.SearchService;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SearchRepository extends CrudRepository<Course,Long> {
    @Query(value="select s.id,s.technology_name,s.mentor_id,s.avg_rating,s.time_slot from skills s inner join technology t  on s.technology_name = t.technology_name where s.technology_name = ?1 and s.time_slot = ?2",nativeQuery = true)
    List<Course> searchCourse(String technologyName, String timeSlot);
    
    @Query(value="select s.id,s.technology_name,s.mentor_id,s.avg_rating,s.time_slot from skills s,technology t  where s.technology_name = t.technology_name ",nativeQuery = true)
    List<Course> searchCourses();
}

