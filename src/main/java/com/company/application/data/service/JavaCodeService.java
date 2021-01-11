package com.company.application.data.service;

import com.company.application.data.entity.JavaCode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vaadin.artur.helpers.CrudService;
import java.time.LocalDate;

@Service
public class JavaCodeService extends CrudService<JavaCode, Integer> {

    private JavaCodeRepository repository;

    public JavaCodeService(@Autowired JavaCodeRepository repository) {
        this.repository = repository;
    }

    @Override
    protected JavaCodeRepository getRepository() {
        return repository;
    }

}
