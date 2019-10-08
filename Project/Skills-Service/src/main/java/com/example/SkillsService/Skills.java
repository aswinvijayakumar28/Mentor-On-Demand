package com.example.SkillsService;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Skills {
	

	@Id
	@GeneratedValue
	@Column(name = "id", nullable = false)
	private Long id;
	@Column(name = "technology_name", nullable = false)
	private String technologyName;
	@Column(name = "mentor_id", nullable = false)
	private Long mentorId;
	@Column(name = "time_slot", nullable = false)
	private String timeSlot;
	@Column(name = "avg_rating")
	private Float avgRating;
	
	
	Skills(){
	
	}

	public Skills(String technologyName, Long mentorId, String timeSlot,Float avgRating) {
		super();
		this.technologyName = technologyName;
		this.mentorId = mentorId;
		this.timeSlot = timeSlot;
		this.avgRating =  avgRating;
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

	

	public String getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}

	public Float getAvgRating() {
		return avgRating;
	}

	public void setAvgRating(Float avgRating) {
		this.avgRating = avgRating;
	}

	public void setMentorId(Long mentorId) {
		this.mentorId = mentorId;
	}
	
	
	
	
	
	

}
