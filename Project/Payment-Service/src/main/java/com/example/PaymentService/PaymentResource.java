package com.example.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PaymentResource {

    @Autowired
    PaymentService paymentService;

    @RequestMapping(method= RequestMethod.POST,value="/user/payments")
    public void addTraining(@RequestBody Payment t) {
        paymentService.addPayment(t);
    }

    @RequestMapping("/payments")
    public List<Payment> getPayments(){
        return paymentService.getPayments();
    }

    @RequestMapping("/payments/{id}")
    public Payment getPayments(@PathVariable Long id){
        return paymentService.getPayments(id);
    }

    @RequestMapping("/userPayments/{userId}/{status}")
    public List<Payment> getUserPayments(@PathVariable Long userId,@PathVariable String status){
        return paymentService.getUserPayments(userId,status);
    }

    @RequestMapping("/userPaymentStatus/{trainingId}")
    public Payment getUserPaymentStatus(@PathVariable Long trainingId){
        return paymentService.getUserPaymentStatus(trainingId);
    }

    @RequestMapping("mentorPayments/{mentorId}/{status}")
    public List<Payment> getMentorPayments(@PathVariable Long mentorId, @PathVariable String status){
        return paymentService.getMentorPayments(mentorId,status);
    }

    @RequestMapping(method=RequestMethod.PUT,value="/user/payments/{id}")
    public void updateTopic(@RequestBody Payment p, @PathVariable Long id){
        paymentService.updatePayment(p, id);
    }

    @RequestMapping(method= RequestMethod.DELETE,value="/user/payments/{id}")
    public void deletePayment(@PathVariable Long id){
        paymentService.deletePayment(id);
    }

}
