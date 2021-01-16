package com.company.application.data.service;

import com.company.application.data.entity.File;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<File, Integer> {

}