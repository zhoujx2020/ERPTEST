package com.empty.wcs;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication //spring-boot 启动注解
@EnableEurekaServer // spring-cloud 服务注解
public class EurekaApplication {
	public static void main(String [] args) {
		System.out.println("---------");
   	 new SpringApplicationBuilder(EurekaApplication.class).web(true).run(args);
    }

}
