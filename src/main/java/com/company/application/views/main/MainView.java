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

    private final Tabs menu;
    public final VerticalLayout progress;

    public MainView() {
        HorizontalLayout header = createHeader();
        menu = createMenuTabs();
        progress = createProgressBar();
        addToNavbar(createTopBar(header, progress));
    }

    private VerticalLayout createTopBar(HorizontalLayout header, VerticalLayout progress) {
        VerticalLayout layout = new VerticalLayout();
        layout.getThemeList().add("dark");
        layout.setWidthFull();
        layout.setSpacing(false);
        layout.setPadding(false);
        layout.setAlignItems(FlexComponent.Alignment.CENTER);
        layout.add(header, progress);
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

    private static VerticalLayout createProgressBar() {
        final VerticalLayout layout = new VerticalLayout();
        layout.setId("progress_layout");
        layout.setWidth("50%");

        final Div labels = new Div();
        labels.setId("progress_labels");
        labels.setWidth("100%");
        final Span label1 = new Span();
        final Span label2 = new Span();
        final Span label3 = new Span();
        final Span label4 = new Span();
        Icon icon1 = new Icon(VaadinIcon.UPLOAD_ALT);
        Icon icon2 = new Icon(VaadinIcon.CURSOR);
        Icon icon3 = new Icon(VaadinIcon.CHECK_CIRCLE);
        Icon icon4 = new Icon(VaadinIcon.DOWNLOAD_ALT);
        icon1.setSize("16px");
        icon2.setSize("16px");
        icon3.setSize("16px");
        icon4.setSize("16px");
        H6 h1 = new H6("Upload");
        H6 h2 = new H6("Select");
        H6 h3 = new H6("Review");
        H6 h4 = new H6("Download");
        h1.setId("progress_label_text_1");
        h2.setId("progress_label_text_2");
        h3.setId("progress_label_text_3");
        h4.setId("progress_label_text_4");
        label1.add(icon1, h1);
        label2.add(icon2, h2);
        label3.add(icon3, h3);
        label4.add(icon4, h4);
        labels.add(label1, label2, label3, label4);

        final ProgressBar bar = new ProgressBar();
        bar.setId("progress");
        bar.setWidth("100%");
        bar.setMin(0);
        bar.setMax(4);
        bar.setValue(3);

        layout.add(labels, bar);
        return layout;
    }

    private static Tabs createMenuTabs() {
        final Tabs tabs = new Tabs();
        tabs.getStyle().set("max-width", "100%");
        tabs.add(getAvailableTabs());
        return tabs;
    }

    private static Tab[] getAvailableTabs() {
        return new Tab[]{createTab("Obfuscate", ObfuscatePresenter.class)};
    }

    private static Tab createTab(String text, Class<? extends Component> navigationTarget) {
        final Tab tab = new Tab();
        tab.addThemeVariants(TabVariant.LUMO_ICON_ON_TOP);
        tab.add(new RouterLink(text, navigationTarget));
        ComponentUtil.setData(tab, Class.class, navigationTarget);
        return tab;
    }

    @Override
    protected void afterNavigation() {
        super.afterNavigation();
        getTabForComponent(getContent()).ifPresent(menu::setSelectedTab);
    }

    private Optional<Tab> getTabForComponent(Component component) {
        return menu.getChildren().filter(tab -> ComponentUtil.getData(tab, Class.class).equals(component.getClass()))
                .findFirst().map(Tab.class::cast);
    }
}
