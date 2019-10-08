package com.example.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentService {

    @Autowired
    PaymentRepository paymentRepository;

    public void addPayment(Payment p) {

        paymentRepository.save(p);

    }

    public List<Payment> getPayments(){
        List<Payment> payments = new ArrayList<Payment>();
        paymentRepository.findAll().forEach(payments::add);
        return payments;
    }

    public Payment getPayments(Long id) {

        return paymentRepository.findById(id).orElse(null);
    }
    public List<Payment> getUserPayments(Long userId,String status) {

        return paymentRepository.searchUserPayments(userId,status);
    }
    
    public Payment getUserPaymentStatus(Long trainingId) {

        return paymentRepository.getUserPaymentStatus(trainingId);
    }

    public List<Payment> getMentorPayments(Long mentorId,String status) {

        return paymentRepository.searchMentorPayments(mentorId,status);
    }



    public void updatePayment(Payment p , Long id) {

        paymentRepository.save(p);

    }

    public void deletePayment(Long id) {

        paymentRepository.deleteById(id);
    }
}
