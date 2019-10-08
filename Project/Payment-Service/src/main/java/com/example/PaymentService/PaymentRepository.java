package com.example.PaymentService;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PaymentRepository extends CrudRepository<Payment,Long> {


    @Query(value="select * from payment p where p.user_id = ?1  and p.payment_status = ?2",nativeQuery = true)
    List<Payment> searchUserPayments(Long userId, String status);
    @Query(value="select * from payment p where p.training_id = ?1",nativeQuery = true)
    Payment getUserPaymentStatus(Long trainingId);

    @Query(value="select * from payment p where p.mentor_id = ?1 and p.payment_status = ?2",nativeQuery = true)
    List<Payment> searchMentorPayments(Long mentorId, String status);

}
