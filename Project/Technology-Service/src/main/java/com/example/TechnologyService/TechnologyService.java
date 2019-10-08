package com.example.TechnologyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TechnologyService {

    @Autowired
    TechnologyRepository technologyRepository;

    public void addTechnology(Technology t) {

        technologyRepository.save(t);

    }

    public List<Technology> getTechnologies(){
        List<Technology> technologies = new ArrayList<Technology>();
        technologyRepository.findAll().forEach(technologies::add);
        return technologies;
    }

    public Technology getTechnologies(Long id) {

        return technologyRepository.findById(id).orElse(null);
    }
    
    public Technology getFeeTechnologies(String technologyName) {

        return technologyRepository.getFees(technologyName);
    }


    public void updateTechnology(Technology t , Long id) {

        technologyRepository.save(t);

    }

    public void deleteTechnology(Long id) {

        technologyRepository.deleteById(id);
    }

}
