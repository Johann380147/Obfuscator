package com.company.application.data.entity;

import javax.persistence.Entity;
import javax.persistence.Table;
import com.company.application.data.AbstractEntity;

@Entity
@Table(name="repository")
public class JavaCode extends AbstractEntity {

    private String code;

    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
}
