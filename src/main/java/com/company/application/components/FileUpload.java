package com.company.application.components;

import com.vaadin.flow.component.ComponentEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.DomEvent;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.shared.Registration;

public class FileUpload extends Upload {
    public Registration addFileRemoveListener(ComponentEventListener<FileRemoveEvent> listener) {
        return super.addListener(FileRemoveEvent.class, listener);
    }

    @DomEvent("file-remove")
    public static class FileRemoveEvent extends ComponentEvent<Upload> {
        public FileRemoveEvent(Upload source, boolean fromClient) {
            super(source, fromClient);
        }
    }
}
