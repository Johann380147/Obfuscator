package com.company.application.data.service;

import com.company.application.data.entity.File;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

public interface FileRepository extends JpaRepository<File, Integer> {

    @Transactional
    @Modifying
    @Query("DELETE FROM File f WHERE f.timeStamp < :timeStamp")
    public void deleteExpiredFiles(@Param("timeStamp") LocalDateTime timeStamp);
}