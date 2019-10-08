package com.example.MailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MailResource {
    @Autowired
    MailService mailService;

    @GetMapping("/mail/{address}/{subject}/{body}")
    public void sendEmail(@PathVariable String address, @PathVariable String subject, @PathVariable String body) {
        mailService.sendEmail(address,subject,body);
    }
}
