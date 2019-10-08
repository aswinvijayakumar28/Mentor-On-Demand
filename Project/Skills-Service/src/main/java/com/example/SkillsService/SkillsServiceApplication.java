package com.example.SkillsService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SkillsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkillsServiceApplication.class, args);
	}

}
