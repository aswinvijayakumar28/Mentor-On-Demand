package com.example.SkillsService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SkillsResource {


    @Autowired
    SkillsService skillsService;

    @RequestMapping(method= RequestMethod.POST,value="/skills")
    public void addSkill(@RequestBody Skills s) {
        skillsService.addSkill(s);
    }

    @RequestMapping("/skills")
    public List<Skills> getSkills(){
        return skillsService.getSkills();
    }

    @RequestMapping("/mentorSkills/{mentorId}")
    public List<Skills> getMentorSkills(@PathVariable Long mentorId){
        return skillsService.getMentorSkills(mentorId);
    }

    @RequestMapping("/skills/{id}")
    public Skills getTechnologies(@PathVariable Long id){
        return skillsService.getSkill(id);
    }




    @RequestMapping(method=RequestMethod.PUT,value="/skills/{id}")
    public void updateSkills(@RequestBody Skills s, @PathVariable Long id){
        skillsService.updateSkills(s, id);
    }

    @RequestMapping(method= RequestMethod.DELETE,value="/skills/{id}")
    public void deleteSkill(@PathVariable Long id){
        skillsService.deleteSkill(id);
    }
}
