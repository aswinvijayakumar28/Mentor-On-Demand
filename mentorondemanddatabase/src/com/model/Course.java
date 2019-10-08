package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Course {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private Long Id;
	
	@Column(name="technology_name")
	private String technologyName;
	
	@Column(name = "mentor_id")
	private Long mentorId;
	
	@Column(name = "avg_rating")
	private Float avgRating;
	
	@Column(name="time_slot")
	private String timeSlot;

	public Course() {
		super();
	}
	
	

	public Course(String technologyName, Long mentorId, Float avgRating,String timeSlot) {
		super();
		this.technologyName = technologyName;
		this.mentorId = mentorId;
		this.avgRating=avgRating;
		this.timeSlot = timeSlot;
	}



	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
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
