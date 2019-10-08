package com.example.TechnologyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
public class TechnologyResource {

    @Autowired
    TechnologyService technologyService;

    @RequestMapping(method= RequestMethod.POST,value="/technologies")
    public void addTechnology(@RequestBody Technology t) {
        technologyService.addTechnology(t);
    }

    @RequestMapping("/technologies")
    public List<Technology> getTechnologies(){
        return technologyService.getTechnologies();
    }

    @RequestMapping("/technologies/{id}")
    public Technology getTechnologies(@PathVariable Long id){
        return technologyService.getTechnologies(id);
    }

    @RequestMapping("/feetechnologies/{technologyName}")
    public Technology getFeeTechnologies(@PathVariable String technologyName){
        return technologyService.getFeeTechnologies(technologyName);
    }




    @RequestMapping(method=RequestMethod.PUT,value="/technologies/{id}")
    public void updateTechnology(@RequestBody Technology t, @PathVariable Long id){
        technologyService.updateTechnology(t, id);
    }

    @RequestMapping(method= RequestMethod.DELETE,value="/technologies/{id}")
    public void deleteTechnology(@PathVariable Long id){
        technologyService.deleteTechnology(id);
    }
}
