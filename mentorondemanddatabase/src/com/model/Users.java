package com.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.Columns;

@Entity
public class Users {

	@Id
	@GeneratedValue
	@Column(name = "id", nullable = false)
	private Long id;

	@Column(name = "user_name", nullable = false)
	private String userName;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "first_name", nullable = false)
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "contact_number", nullable = false)
	private Long contactNumber;

	@Column(name = "role", nullable = false)
	private String role;

	@Column(name = "years_of_experience")
	private Float yearsOfExperience;

	@Column(name = "active", nullable = false)
	private Boolean active = false;

	/*
	 * @ManyToMany(targetEntity = MentorSkills.class, cascade = { CascadeType.ALL })
	 * 
	 * @JoinTable(name = "userskills", joinColumns = { @JoinColumn(name = "user_id")
	 * }, inverseJoinColumns = { @JoinColumn(name = "skill_id") }) private
	 * List<MentorSkills> skills = null;
	 * 
	 * @OneToMany(cascade = CascadeType.ALL)
	 * 
	 * @JoinColumn(name="user_id") private List<MentorCalendar> availableSlots =
	 * null;
	 * 
	 * @OneToMany(cascade = CascadeType.ALL)
	 * 
	 * @JoinColumn(name="user_id") private List<Training> trainings = null;
	 * 
	 * 
	 */
	Users() {

	}

	public Users(String userName, String password, String firstName, String lastName, Long contactNumber, String role,
			Float yearsOfExperience, Boolean active) {
		super();

		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNumber = contactNumber;
		this.role = role;
		this.yearsOfExperience = yearsOfExperience;
		this.active = active;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(Long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Float getYearsOfExperience() {
		return yearsOfExperience;
	}

	public void setYearsOfExperience(Float yearsOfExperience) {
		this.yearsOfExperience = yearsOfExperience;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}
	
	

}
