package com.company.application.models.obfuscate;

import com.company.application.classes.Model;
import com.company.application.data.entity.File;
import com.company.application.data.service.FileService;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

public class ObfuscateModel implements Model<ObfuscateModel> {

    FileService service;
    private final HashMap<String, Boolean> techniques;

    public ObfuscateModel() {
        techniques = new HashMap<String, Boolean>() {{
            put("Technique 1", true);
            put("Technique 2", true);
            put("Technique 3", true);
            put("Technique 4", false);
            put("Technique 5", false);
            put("Technique 6", false);
        }};
    }

    public HashMap<String, Boolean> getTechniques() {
        return techniques;
    }

    public int addFile(String fileName, String mimeType, byte[] data, LocalDateTime dateTime) {
        File file = new File();
        file.setFileName(fileName);
        file.setMimeType(mimeType);
        file.setData(data);
        file.setTimeStamp(dateTime);

        return service.saveOrUpdate(file);
    }

    public File getFile(int id) {
        return service.getFile(id);
    }

    public List<File> getFiles(Iterable<Integer> ids) {
        return service.getFiles(ids);
    }

    public void setService(FileService service) {
        this.service = service;
    }
}