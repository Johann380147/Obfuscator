package com.company.application.views.obfuscate;

import com.company.application.data.entity.JavaCode;
import com.company.application.data.service.JavaCodeService;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.customfield.CustomField;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Receiver;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import com.company.application.views.main.MainView;
import com.vaadin.flow.router.RouteAlias;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.data.renderer.TemplateRenderer;

import java.io.OutputStream;

/**
 * A Designer generated component for the obfuscate-view template.
 *
 * Designer will add and remove fields with @Id mappings but does not overwrite
 * or otherwise change this file.
 */
@Route(value = "home", layout = MainView.class)
@PageTitle("Obfuscate")
@JsModule("./src/views/obfuscate/obfuscate-view.js")
@Tag("obfuscate-view")
@RouteAlias(value = "", layout = MainView.class)
public class ObfuscateView extends PolymerTemplate<TemplateModel> {

    @Id("content_container")
    private VerticalLayout container;
    @Id("upload_container")
    private HorizontalLayout uploadContainer;
    @Id("compare_container")
    private HorizontalLayout compareContainer;
    @Id("download_container")
    private HorizontalLayout downloadContainer;
    @Id("footer_container")
    private HorizontalLayout footer_container;
    @Id("upload")
    private Upload upload;
    @Id("before")
    private TextArea before;
    @Id("after")
    private TextArea after;
    @Id("download")
    private Button download;

    private Binder<JavaCode> binder = new Binder(JavaCode.class);

    public ObfuscateView(JavaCodeService javaCodeService) {
        container.setWidthFull();
        container.setAlignItems(FlexComponent.Alignment.CENTER);
        uploadContainer.setWidthFull();
        uploadContainer.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        compareContainer.setWidthFull();
        compareContainer.setHeight("400px");
        compareContainer.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        downloadContainer.setWidthFull();
        downloadContainer.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        footer_container.setHeight("50px");

        upload.setWidth("50%");
        before.setWidth("25%");
        before.setMinWidth("200px");
        before.setHeightFull();
        before.setReadOnly(true);
        after.setWidth("25%");
        after.setMinWidth("200px");
        after.setHeightFull();
        after.setReadOnly(true);
        download.setWidth("30%");

        /*upload.setReceiver(new Receiver() {
            @Override
            public OutputStream receiveUpload(String filename, String MIMEType) {
                if (binder.validate().isOk()) {
                    javaCodeService.update(binder.getBean());
                    Notification.show("Uploaded files");
                }
            }
        });*/
        download.addClickListener(e -> {

        });
    }

    private void clearForm() {
        binder.setBean(new JavaCode());
    }


}
