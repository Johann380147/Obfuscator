package com.company.application.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import com.company.application.data.AbstractEntity;

import java.time.LocalDateTime;

@Entity
@Table(name="files")
public class File extends AbstractEntity {

    @Column
    private String fileName;
    @Column
    private String mimeType;
    @Column
    @Lob
    private byte[] data;
    @Column
    private LocalDateTime timeStamp;

    public String getFileName() {
        return fileName;
    }
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
    public String getMimeType() {
        return mimeType;
    }
    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }
    public byte[] getData() {
        return data;
    }
    public void setData(byte[] data) {
        this.data = data;
    }
    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }
    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }
}
