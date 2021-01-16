package com.company.application.views.obfuscate;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.treegrid.TreeGrid;
import com.vaadin.flow.component.upload.Upload;

import java.util.ArrayList;
import java.util.HashMap;


@CssImport("./styles/views/obfuscate/obfuscate-view.css")
public class ObfuscateView extends VerticalLayout {

    private final HorizontalLayout uploadContainer;
    private final HorizontalLayout techniqueContainer;
    private final VerticalLayout reviewContainer;
    private final HorizontalLayout downloadContainer;

    private final Upload upload = new Upload();
    private final TreeGrid fileList = new TreeGrid();
    private final TextArea before = new TextArea();
    private final TextArea after = new TextArea();
    private final Button download = new Button();

    private final Button previous = new Button("Previous");
    private final Button next = new Button("Next");

    public ObfuscateView() {
        uploadContainer = createUploadLayout();
        techniqueContainer = createTechniqueLayout();
        reviewContainer = createReviewLayout();
        downloadContainer = createDownloadLayout();

        uploadContainer.setId("1");
        techniqueContainer.setId("2");
        reviewContainer.setId("3");
        downloadContainer.setId("4");

        this.setId("main_container");
        this.setWidthFull();
        this.setHeightFull();
        this.add(
                createNavigationLayout(),
                createMarginLayout(Alignment.START),
                uploadContainer,
                techniqueContainer,
                reviewContainer,
                downloadContainer,
                createMarginLayout(Alignment.END));
    }

    public ArrayList<Checkbox> setTechniques(HashMap<String, Boolean> techniques) {
        if (techniques == null || techniques.isEmpty()) return null;

        ArrayList<Checkbox> checkboxes = new ArrayList<>();
        VerticalLayout checkboxContainer = createCheckBoxContainer();

        techniqueContainer.removeAll();
        techniqueContainer.add(checkboxContainer);
        for (String key : techniques.keySet()) {
            Checkbox checkbox = createTechniqueCheckbox(key, techniques.get(key));
            if (checkboxContainer.getChildren().count() < 3) {
                checkboxContainer.add(checkbox);
            }
            else {
                checkboxContainer = createCheckBoxContainer();
                checkboxContainer.add(checkbox);
                techniqueContainer.add(checkboxContainer);
            }
            checkboxes.add(checkbox);
        }

        return checkboxes;
    }

    public Button getPrevious() {
        return previous;
    }

    public Button getNext() {
        return next;
    }

    public Button getDownload() {
        return download;
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

    public TreeGrid getFileList() {
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

    private HorizontalLayout createUploadLayout() {
        upload.setAcceptedFileTypes(".class");
        upload.setDropLabel(new Label("Drop \".class\" files here"));
        upload.setMaxFileSize(100000000);
        upload.setWidth("50%");

        HorizontalLayout layout = new HorizontalLayout();
        layout.setWidthFull();
        layout.setJustifyContentMode(JustifyContentMode.CENTER);
        layout.setVisible(true);
        layout.add(upload);

        return layout;
    }

    private HorizontalLayout createTechniqueLayout() {
        HorizontalLayout layout = new HorizontalLayout();
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
        compareLayout.setHeightFull();
        compareLayout.setMinHeight("400px");
        compareLayout.setAlignItems(Alignment.CENTER);
        compareLayout.setJustifyContentMode(JustifyContentMode.CENTER);
        compareLayout.add(before, new Icon(VaadinIcon.ARROW_RIGHT), after);

        VerticalLayout layout = new VerticalLayout();
        layout.setWidthFull();
        layout.setHeightFull();
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
        layout.setJustifyContentMode(JustifyContentMode.CENTER);
        layout.setVisible(false);
        layout.add(download);

        return layout;
    }

    private HorizontalLayout createMarginLayout(Alignment alignment) {
        HorizontalLayout layout = new HorizontalLayout();
        layout.setHeight("100px");
        layout.setAlignSelf(alignment);
        return layout;
    }

    private HorizontalLayout createNavigationLayout() {
        HorizontalLayout layout = new HorizontalLayout();
        layout.setId("nav_container");
        layout.setWidthFull();
        layout.setSpacing(false);
        layout.setJustifyContentMode(JustifyContentMode.BETWEEN);

        previous.setId("nav_button_prev");
        next.setId("nav_button_next");
        previous.addThemeNames("contrast secondary");
        next.addThemeNames("primary");
        previous.setIcon(new Icon(VaadinIcon.ARROW_LEFT));
        next.setIcon(new Icon(VaadinIcon.ARROW_RIGHT));
        next.setIconAfterText(true);
        previous.setEnabled(false);

        layout.add(previous, next);
        return layout;
    }

    private VerticalLayout createCheckBoxContainer() {
        VerticalLayout container = new VerticalLayout();
        container.addClassName("checkbox-container");
        return container;
    }

    private Checkbox createTechniqueCheckbox(String text, Boolean isChecked) {
        Checkbox checkbox = new Checkbox();
        checkbox.setLabel(text);
        checkbox.setValue(isChecked);
        return checkbox;
    }
}
