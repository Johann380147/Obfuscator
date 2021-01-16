package com.company.application.views.main;

import java.util.Optional;

import com.company.application.presenters.obfuscate.ObfuscatePresenter;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.ComponentUtil;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.progressbar.ProgressBar;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.TabVariant;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.Theme;
import com.company.application.views.main.MainView;
import com.company.application.views.obfuscate.ObfuscateView;

/**
 * The main view is a top-level placeholder for other views.
 */
@CssImport(value = "./styles/views/main/main-view.css", themeFor = "vaadin-app-layout")
@CssImport("./styles/views/main/main-view.css")
@PWA(name = "Obfuscator", shortName = "Obfuscator", enableInstallPrompt = false)
@JsModule("./styles/shared-styles.js")
public class MainView extends AppLayout {
    private static MainView mainView = null;
    private final ProgressBar progress;

    public MainView() {
        HorizontalLayout header = createHeader();
        VerticalLayout widget = createProgressWidget();
        progress = createProgressBar();
        widget.add(progress);

        mainView = this;
        addToNavbar(createTopBar(header, widget));
    }

    public static MainView getInstance() {
        return mainView;
    }

    public ProgressBar getProgress() {
        return progress;
    }

    private VerticalLayout createTopBar(HorizontalLayout header, VerticalLayout bar) {
        VerticalLayout layout = new VerticalLayout();
        layout.getThemeList().add("dark");
        layout.setWidthFull();
        layout.setSpacing(false);
        layout.setPadding(false);
        layout.setAlignItems(FlexComponent.Alignment.CENTER);
        layout.add(header, bar);
        return layout;
    }

    private HorizontalLayout createHeader() {
        HorizontalLayout header = new HorizontalLayout();
        header.setPadding(false);
        header.setSpacing(false);
        header.setWidthFull();
        header.setAlignItems(FlexComponent.Alignment.CENTER);
        header.setId("header");
        Image logo = new Image("images/logo.png", "Obfuscator logo");
        logo.setId("logo");
        header.add(logo);
        /*Image avatar = new Image("images/user.svg", "Avatar");
        avatar.setId("avatar");
        header.add(avatar);*/
        header.add(new H1("Obfuscator"));

        return header;
    }

    private VerticalLayout createProgressWidget() {
        final VerticalLayout layout = new VerticalLayout();
        layout.setWidth("50%");
        final Div labels = createProgressLabels();
        layout.add(labels);

        return layout;
    }

    private ProgressBar createProgressBar() {
        final ProgressBar bar = new ProgressBar();
        bar.setId("progress");
        bar.setWidthFull();
        bar.setMin(0);
        bar.setMax(4);
        bar.setValue(1);

        return bar;
    }

    private Div createProgressLabels() {
        final Div labels = new Div();
        labels.setId("progress_labels");
        labels.setWidthFull();

        final Span label1 = createProgressHeaders("progress_label_text", "Upload", VaadinIcon.UPLOAD_ALT);
        final Span label2 = createProgressHeaders("progress_label_text", "Select", VaadinIcon.CURSOR);
        final Span label3 = createProgressHeaders("progress_label_text", "Review", VaadinIcon.CHECK_CIRCLE);
        final Span label4 = createProgressHeaders("progress_label_text", "Download", VaadinIcon.DOWNLOAD_ALT);
        labels.add(label1, label2, label3, label4);

        return labels;
    }

    private Span createProgressHeaders(String cls, String text, VaadinIcon icon) {
        final Span span = new Span();
        final Icon headerIcon = new Icon(icon);
        final H6 headerText = new H6(text);

        headerIcon.setSize("16px");
        headerText.addClassName(cls);
        span.add(headerIcon, headerText);

        return span;
    }
}
