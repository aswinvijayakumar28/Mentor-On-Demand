package com.example.MailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String address,String subject, String body) {
        SimpleMailMessage msg = new SimpleMailMessage();

        msg.setTo(address);
        msg.setSubject(subject);
        msg.setText(body);

        javaMailSender.send(msg);
    }
}
