package com.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Trainings {
	

	@Id
	@GeneratedValue
	@Column(name="id",nullable = false)
	private Long id;
	
	@Column(name="status")
	private String status = null;
	
	@Column(name="progress",nullable = false)
	private Integer progress = 0;;
	

	@Column(name="avg_rating",nullable = false)
	private Float avgRating  = 0f;
	
	
	@Column(name="amount_received",nullable = false)
	private Float amountReceived = 0F;

	@Column(name="user_id")
	private Long userId = 000L;
	
	@Column(name="mentor_id")
	private Long mentorId = 000L;
	
	@Column(name="fees")
	private Float fees = 0F;
	
	
	@Column(name = "technology_name")
	private String technologyName = null;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "payment_id")
	private Payment payment;
	
	
	public Trainings() {
		super();
	}
	public Trainings( String status, Integer progress, Float avgRating,
			Float amountReceived, Long userId, Long mentorId, Float fee, String technologyName ) {
		super();
	
		this.status = status;
		this.progress = progress;
		
		this.avgRating = avgRating;
		this.amountReceived = amountReceived;
		this.userId = userId;
		this.mentorId = mentorId;
		this.fees = fees;
		this.technologyName = technologyName;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Integer getProgress() {
		return progress;
	}
	public void setProgress(Integer progress) {
		this.progress = progress;
	}

	public Float getAvgRating() {
		return avgRating;
	}
	public void setAvgRating(Float avgRating) {
		this.avgRating = avgRating;
	}
	public Float getAmountReceived() {
		return amountReceived;
	}
	public void setAmountReceived(Float amountReceived) {
		this.amountReceived = amountReceived;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Long getMentorId() {
		return mentorId;
	}
	public void setMentorId(Long mentorId) {
		this.mentorId = mentorId;
	}
	public Float getFees() {
		return fees;
	}
	public void setFees(Float fees) {
		this.fees = fees;
	}
	
	
	public String getTechnologyName() {
		return technologyName;
	}
	public void setTechnologyName(String technologyName) {
		this.technologyName = technologyName;
	}
	public Payment getPayment() {
		return payment;
	}
	public void setPayment(Payment payment) {
		this.payment = payment;
	}
	
	
	

}
