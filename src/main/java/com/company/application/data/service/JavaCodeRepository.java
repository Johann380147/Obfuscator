package com.company.application.data.service;

import com.company.application.data.entity.JavaCode;

import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;

public interface JavaCodeRepository extends JpaRepository<JavaCode, Integer> {

}