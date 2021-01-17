package com.company.application.components;

import com.vaadin.flow.server.VaadinRequest;
import com.vaadin.flow.server.VaadinSession;
import org.vaadin.firitin.components.DynamicFileDownloader;

import java.time.LocalDateTime;

public class DownloadAnchor extends DynamicFileDownloader {
    private String prefix = "";
    private String suffix = "";

    public DownloadAnchor() { }
    public DownloadAnchor(String prefix, String suffix) {
        this.prefix = prefix;
        this.suffix = suffix;
    }

    public String getPrefix() {
        return prefix;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    @Override
    protected String getFileName(VaadinSession session, VaadinRequest request) {
        return prefix + LocalDateTime.now() + suffix;
    }
}
