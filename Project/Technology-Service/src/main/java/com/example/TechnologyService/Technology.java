package com.example.TechnologyService;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Technology {

    @Id
    @GeneratedValue

    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "technology_name", nullable = false)
    private String technologyName;
    @Column(name = "toc", nullable = false)
    private String toc;
    @Column(name = "duration", nullable = false)
    private String duration;
    @Column(name = "prerequisites", nullable = false)
    private String prerequisites;
    @Column(name = "fees", nullable = false)
    private float fees;

    Technology() {

    }


    public Technology(String technologyName, String toc, String duration, String prerequisites, float fees) {
        super();

        this.technologyName = technologyName;
        this.toc = toc;
        this.duration = duration;
        this.prerequisites = prerequisites;
        this.fees = fees;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTechnologyName() {
        return technologyName;
    }

    public void setTechnologyName(String technologyName) {
        this.technologyName = technologyName;
    }

    public String getToc() {
        return toc;
    }

    public void setToc(String toc) {
        this.toc = toc;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getPrerequisites() {
        return prerequisites;
    }

    public void setPrerequisites(String prerequisites) {
        this.prerequisites = prerequisites;
    }


    public float getFees() {
        return fees;
    }


    public void setFees(float fees) {
        this.fees = fees;
    }

}
