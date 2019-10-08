package com.example.TechnologyService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TechnologyServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TechnologyServiceApplication.class, args);
	}

}
