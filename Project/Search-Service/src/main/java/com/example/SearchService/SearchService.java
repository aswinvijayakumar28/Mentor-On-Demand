package com.example.SearchService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {

    @Autowired
    SearchRepository searchRepository;

    public List<Course> getCourse(String technologyName,String timeSlot){
        return searchRepository.searchCourse(technologyName,timeSlot);
    }
    
    public List<Course> getCourses(){
        return searchRepository.searchCourses();
    }
}
