package com.example.PaymentService;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
public class Payment {


    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "payment_status", nullable = false)
    private String paymentStatus;

    @Column(name = "training_name", nullable = false)
    private String trainingName;

    @Column(name = "total_payment", nullable = false)
    private Float totalPayment;

    @Column(name = "payment_released", nullable = false)
    private Float paymentReleased;

    @Column(name = "payment_pending", nullable = false)
    private Float paymentPending;

    @Column(name = "mentor_id", nullable = false)
    private Long mentorId;

    @Column(name = "user_id", nullable = false)
    private Long userId;



    Payment(){

    }



    public Payment(String paymentStatus, String trainingName, Float totalPayment, Float paymentReleased,
                   Float paymentPending, Long mentorId, Long userId) {
        super();
        this.paymentStatus = paymentStatus;
        this.trainingName = trainingName;
        this.totalPayment = totalPayment;
        this.paymentReleased = paymentReleased;
        this.paymentPending = paymentPending;
        this.mentorId = mentorId;
        this.userId = userId;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getTrainingName() {
        return trainingName;
    }

    public void setTrainingName(String trainingName) {
        this.trainingName = trainingName;
    }

    public Float getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(Float totalPayment) {
        this.totalPayment = totalPayment;
    }

    public Float getPaymentReleased() {
        return paymentReleased;
    }

    public void setPaymentReleased(Float paymentReleased) {
        this.paymentReleased = paymentReleased;
    }

    public Float getPaymentPending() {
        return paymentPending;
    }

    public void setPaymentPending(Float paymentPending) {
        this.paymentPending = paymentPending;
    }


    public Long getMentorId() {
        return mentorId;
    }

    public void setMentorId(Long mentorId) {
        this.mentorId = mentorId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

}
