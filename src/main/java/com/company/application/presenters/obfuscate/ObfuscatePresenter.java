package com.company.application.presenters.obfuscate;

import com.company.application.classes.Presenter;
import com.company.application.models.obfuscate.ObfuscateModel;
import com.company.application.views.main.MainView;
import com.company.application.views.obfuscate.ObfuscateView;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;


@RouteAlias(value = "", layout = MainView.class)
@Route(value = "home", layout = MainView.class)
public class ObfuscatePresenter extends Presenter<ObfuscateModel, ObfuscateView> {

    public ObfuscatePresenter() {

    }
}