package com.company.application;

import de.mekaso.vaadin.addon.compani.ResourceLoaderServlet;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.vaadin.artur.helpers.LaunchUtil;

/**
 * The entry point of the Spring Boot application.
 */
@SpringBootApplication
@EnableScheduling
public class Application extends SpringBootServletInitializer {

    public static void main(String[] args) {
        //SpringApplication.run(Application.class, args);
        LaunchUtil.launchBrowserInDevelopmentMode(SpringApplication.run(Application.class, args));
    }

    @Bean
    public ServletRegistrationBean registerComponentAnimations() {
        return new ServletRegistrationBean(new ResourceLoaderServlet(), "/frontend/compani/compani.js");
    }
}
