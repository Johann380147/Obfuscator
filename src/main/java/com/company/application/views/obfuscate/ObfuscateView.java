package com.company.application.views.obfuscate;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.listbox.ListBox;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.checkbox.Checkbox;

import java.util.ArrayList;
import java.util.HashMap;


@CssImport("./styles/views/obfuscate/obfuscate-view.css")
public class ObfuscateView extends Div {

    private final HorizontalLayout uploadContainer;
    private final HorizontalLayout techniqueContainer;
    private final VerticalLayout reviewContainer;
    private final HorizontalLayout downloadContainer;

    private final Upload upload = new Upload();
    private final ListBox fileList = new ListBox();
    private final TextArea before = new TextArea();
    private final TextArea after = new TextArea();
    private final Button download = new Button();

    private final Button h1;
    private final Button h2;
    private final Button h3;
    private final Button h4;

    public ObfuscateView() {
        uploadContainer = createUploadLayout();
        techniqueContainer = createTechniqueLayout();
        reviewContainer = createReviewLayout();
        downloadContainer = createDownloadLayout();

        h1 = createHeaderButton("Step 1: Upload files");
        h2 = createHeaderButton("Step 2: Select obfuscation techniques");
        h3 = createHeaderButton("Step 3: Review Changes");
        h4 = createHeaderButton("Step 4: Download");

        VerticalLayout container = new VerticalLayout();
        container.setWidthFull();
        container.setAlignItems(FlexComponent.Alignment.CENTER);
        container.add(
                createMarginLayout(),
                h1, uploadContainer,
                h2, techniqueContainer,
                h3, reviewContainer,
                h4, downloadContainer,
                createMarginLayout());

        this.setId("main_container");
        this.add(container);

        InitListeners();
    }

    public ArrayList<Checkbox> setTechniques(HashMap<String, Boolean> techniques) {
        if (techniques == null || techniques.isEmpty()) return null;

        ArrayList<Checkbox> checkboxes = new ArrayList<>();

        VerticalLayout checkboxContainer = new VerticalLayout();
        checkboxContainer.addClassName("checkbox-container");
        techniqueContainer.removeAll();
        techniqueContainer.add(checkboxContainer);
        for (String key : techniques.keySet()) {
            Checkbox checkbox = createTechniqueCheckbox(key, techniques.get(key));
            if (checkboxContainer.getChildren().count() < 3) {
                checkboxContainer.add(checkbox);
            }
            else {
                checkboxContainer = new VerticalLayout();
                checkboxContainer.add(checkbox);
                techniqueContainer.add(checkboxContainer);
            }
            checkboxes.add(checkbox);
        }

        return checkboxes;
    }

    public Button getH1() {
        return h1;
    }

    public Button getH2() {
        return h2;
    }

    public Button getH3() {
        return h3;
    }

    public Button getH4() {
        return h4;
    }

    public HorizontalLayout getUploadContainer() {
        return uploadContainer;
    }

    public HorizontalLayout getTechniqueContainer() {
        return techniqueContainer;
    }

    public VerticalLayout getReviewContainer() {
        return reviewContainer;
    }

    public HorizontalLayout getDownloadContainer() {
        return downloadContainer;
    }

    public Upload getUpload() {
        return upload;
    }

    public ListBox getFileList() {
        return fileList;
    }

    public void setFileListItems(ArrayList<String> files) {
        if (files == null) return;
        fileList.setItems(files);
    }

    public void setBeforeText(String text) {
        before.setValue(text);
    }

    public void setAfterText(String text) {
        after.setValue(text);
    }

    private void InitListeners() {

    }

    private HorizontalLayout createUploadLayout() {
        upload.setAcceptedFileTypes(".class");
        upload.setDropLabel(new Label("Drop \".class\" files here"));
        upload.setMaxFileSize(100000000);
        upload.setWidth("50%");

        HorizontalLayout layout = new HorizontalLayout();
        layout.setWidthFull();
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        layout.setVisible(true);
        layout.add(upload);

        return layout;
    }

    private HorizontalLayout createTechniqueLayout() {
        HorizontalLayout layout = new HorizontalLayout();
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.EVENLY);
        layout.setVisible(false);

        return layout;
    }

    private VerticalLayout createReviewLayout() {
        fileList.setId("file_list");
        before.setWidth("40%");
        before.setMinWidth("200px");
        before.setHeightFull();
        before.setReadOnly(true);
        after.setWidth("40%");
        after.setMinWidth("200px");
        after.setHeightFull();
        after.setReadOnly(true);

        HorizontalLayout compareLayout = new HorizontalLayout();
        compareLayout.setWidthFull();
        compareLayout.setHeight("400px");
        compareLayout.setAlignItems(FlexComponent.Alignment.CENTER);
        compareLayout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        compareLayout.add(before, after);

        VerticalLayout layout = new VerticalLayout();
        layout.setWidthFull();
        layout.setVisible(false);
        layout.add(fileList, compareLayout);

        return layout;
    }

    private HorizontalLayout createDownloadLayout() {
        download.setText("Download Files");
        download.addThemeName("primary");
        download.setIcon(new Icon(VaadinIcon.DOWNLOAD_ALT));
        download.setWidth("30%");

        HorizontalLayout layout = new HorizontalLayout();
        layout.setWidthFull();
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        layout.setVisible(false);
        layout.add(download);

        return layout;
    }

    private HorizontalLayout createMarginLayout() {
        HorizontalLayout layout = new HorizontalLayout();
        layout.setHeight("100px");
        return layout;
    }

    private Button createHeaderButton(String text) {
        Button button = new Button(text);
        button.setClassName("header-button");
        button.addThemeNames("contrast secondary");
        return button;
    }

    private Checkbox createTechniqueCheckbox(String text, Boolean isChecked) {
        Checkbox checkbox = new Checkbox();
        checkbox.setLabel(text);
        checkbox.setValue(isChecked);
        return checkbox;
    }
}
