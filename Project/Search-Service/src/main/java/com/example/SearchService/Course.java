package com.example.SearchService;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Course {
	

@Id
	private Long id;
	

	private String technologyName;
	
		

	private Long mentorId;
	

    private Float avgRating;
	
	
	

	private String timeSlot;

	public Course() {
		super();
	}

	public Course(String technologyName, Long mentorId, Float avgRating, String timeSlot) {
		super();
		this.technologyName = technologyName;
		this.mentorId = mentorId;
		this.avgRating = avgRating;
		this.timeSlot = timeSlot;
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

	public Long getMentorId() {
		return mentorId;
	}

	public void setMentorId(Long mentorId) {
		this.mentorId = mentorId;
	}

	public Float getAvgRating() {
		return avgRating;
	}

	public void setAvgRating(Float avgRating) {
		this.avgRating = avgRating;
	}

	public String getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}
	
	
	
}
