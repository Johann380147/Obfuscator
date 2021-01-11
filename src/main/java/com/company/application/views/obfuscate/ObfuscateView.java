package com.company.application.views.obfuscate;

import com.company.application.data.entity.JavaCode;
import com.company.application.data.service.JavaCodeService;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.customfield.CustomField;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import com.company.application.views.main.MainView;
import com.vaadin.flow.router.RouteAlias;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.data.renderer.TemplateRenderer;

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

    @Id("fileName")
    private TextField fileName;
    @Id("browse")
    private Button browse;
    @Id("content_container")
    private VerticalLayout container;
    @Id("file_upload_container")
    private HorizontalLayout uploadContainer;

    private Binder<JavaCode> binder = new Binder(JavaCode.class);

    public ObfuscateView(JavaCodeService personService) {
        container.setWidthFull();
        container.setHeightFull();
        container.setAlignItems(FlexComponent.Alignment.CENTER);
        container.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);

        uploadContainer.setWidthFull();
        uploadContainer.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);

        fileName.setWidth("40%");
        fileName.setReadOnly(true);

        clearForm();

        browse.addClickListener(e -> {
            personService.update(binder.getBean());
            Notification.show("Person details stored.");
            clearForm();
        });
    }

    private void clearForm() {
        binder.setBean(new JavaCode());
    }


}
