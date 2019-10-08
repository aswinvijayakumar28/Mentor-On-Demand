package com.example.SearchService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SearchResource {

    @Autowired
    SearchService searchService;

    @RequestMapping("/search/{technologyName}/{timeSlot}")
    public List<Course> getTech(@PathVariable String technologyName,@PathVariable String timeSlot){
        return searchService.getCourse(technologyName,timeSlot);
    }

    @RequestMapping("/search")
    public List<Course> getTechs(){
        return searchService.getCourses();
    }


}
