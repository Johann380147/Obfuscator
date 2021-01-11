package com.company.application.data.entity;

import javax.persistence.Entity;

import com.company.application.data.AbstractEntity;
import java.time.LocalDate;

@Entity
public class JavaCode extends AbstractEntity {

    private String code;

    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
}
