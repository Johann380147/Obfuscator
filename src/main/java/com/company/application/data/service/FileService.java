package com.company.application.data.service;

import com.company.application.data.entity.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vaadin.artur.helpers.CrudService;

import java.util.List;

@Service
public class FileService extends CrudService<File, Integer> {

    private FileRepository repository;

    public FileService(@Autowired FileRepository repository) {
        this.repository = repository;
    }

    @Override
    protected FileRepository getRepository() {
        return repository;
    }

    public File getFile(int id) {
        return repository.findById(id).get();
    }

    public List<File> getFiles(Iterable<Integer> ids) {
        return repository.findAllById(ids);
    }

    public int saveOrUpdate(File file) {
        return repository.save(file).getId();
    }

    public void delete(int id) {
        repository.deleteById(id);
    }
}
