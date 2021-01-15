package com.company.application.presenters.obfuscate;

import com.company.application.classes.Presenter;
import com.company.application.models.obfuscate.ObfuscateModel;
import com.company.application.views.main.MainView;
import com.company.application.views.obfuscate.ObfuscateView;

import com.vaadin.flow.component.HasValue;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.upload.receivers.MultiFileMemoryBuffer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

import java.util.ArrayList;
import java.util.HashMap;


@PageTitle("Obfuscate")
@RouteAlias(value = "", layout = MainView.class)
@Route(value = "home", layout = MainView.class)
public class ObfuscatePresenter extends Presenter<ObfuscateModel, ObfuscateView> {

    private final MainView header;
    private final ObfuscateView view;
    private final ObfuscateModel model;

    private final ArrayList<Checkbox> checkboxes;

    public ObfuscatePresenter() {
        header = MainView.getInstance();
        view = getContent();
        model = getModel();

        checkboxes = view.setTechniques(model.getTechniques());
        InitListeners();
    }

    public void InitListeners() {
        // To implement: store uploaded files and set filelist
        view.getUpload().setReceiver(new MultiFileMemoryBuffer());
        view.setFileListItems(new ArrayList<String>() {{ add("Sample File 1"); add("Sample File 2"); }});
        // To implement: store name of first item when uploading and set value here
        view.getFileList().setValue("Sample File 1");

        for (Checkbox checkbox : checkboxes) {
            checkbox.addValueChangeListener(event -> {
                if (event.getValue() == null) {
                    model.getTechniques().replace(checkbox.getLabel(), false);
                } else {
                    model.getTechniques().replace(checkbox.getLabel(), true);
                }
            });
        }

        view.getFileList().addValueChangeListener(event -> {
            // To implement: Obfuscate targeted file and display
            event.getValue();
            view.setBeforeText(event.getValue().toString());
            view.setAfterText("");
        });

        view.getH1().addClickListener(event -> {
            view.getUploadContainer().setVisible(true);
            view.getTechniqueContainer().setVisible(false);
            view.getReviewContainer().setVisible(false);
            view.getDownloadContainer().setVisible(false);
            header.setProgress(1);
        });
        view.getH2().addClickListener(event -> {
            view.getUploadContainer().setVisible(false);
            view.getTechniqueContainer().setVisible(true);
            view.getReviewContainer().setVisible(false);
            view.getDownloadContainer().setVisible(false);
            header.setProgress(2);
        });
        view.getH3().addClickListener(event -> {
            view.getUploadContainer().setVisible(false);
            view.getTechniqueContainer().setVisible(false);
            view.getReviewContainer().setVisible(true);
            view.getDownloadContainer().setVisible(false);
            header.setProgress(3);
        });
        view.getH4().addClickListener(event -> {
            view.getUploadContainer().setVisible(false);
            view.getTechniqueContainer().setVisible(false);
            view.getReviewContainer().setVisible(false);
            view.getDownloadContainer().setVisible(true);
            header.setProgress(4);
        });
    }
}