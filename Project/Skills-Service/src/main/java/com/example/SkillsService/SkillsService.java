package com.example.SkillsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SkillsService {
    @Autowired
    SkillsRepository skillsRepository;

    public void addSkill(Skills s) {

        skillsRepository.save(s);

    }

    public List<Skills> getSkills(){
        List<Skills> skills = new ArrayList<Skills>();
        skillsRepository.findAll().forEach(skills::add);
        return skills;
    }

    public List<Skills> getMentorSkills(Long mentorId){
        return skillsRepository.getMentorSkills(mentorId);
    }

    public Skills getSkill(Long id) {

        return skillsRepository.findById(id).orElse(null);
    }




    public void updateSkills(Skills s , Long id) {

        skillsRepository.save(s);

    }

    public void deleteSkill(Long id) {

        skillsRepository.deleteById(id);
    }
}
