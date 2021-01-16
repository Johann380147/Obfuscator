package com.company.application.presenters.obfuscate;

import com.company.application.classes.Presenter;
import com.company.application.models.obfuscate.ObfuscateModel;
import com.company.application.utils.StringUtil;
import com.company.application.views.main.MainView;
import com.company.application.views.obfuscate.ObfuscateView;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.upload.receivers.MultiFileMemoryBuffer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;
import de.mekaso.vaadin.addon.compani.AnimatedComponent;
import de.mekaso.vaadin.addon.compani.Animator;
import de.mekaso.vaadin.addon.compani.animation.Animation;
import de.mekaso.vaadin.addon.compani.animation.AnimationBuilder;
import de.mekaso.vaadin.addon.compani.animation.AnimationTypes;
import de.mekaso.vaadin.addon.compani.effect.EntranceEffect;

import java.util.ArrayList;


@PageTitle("Obfuscate")
@RouteAlias(value = "", layout = MainView.class)
@Route(value = "home", layout = MainView.class)
public class ObfuscatePresenter extends Presenter<ObfuscateModel, ObfuscateView> {

    private final MainView header;
    private final ObfuscateView view;
    private final ObfuscateModel model;

    private final ArrayList<Checkbox> checkboxes;

    private Component currentComponent;

    public ObfuscatePresenter() {
        header = MainView.getInstance();
        view = getContent();
        model = getModel();

        currentComponent = view.getUploadContainer();

        checkboxes = view.setTechniques(model.getTechniques());
        InitListeners();
    }

    private void InitListeners() {
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

        // Navigation buttons
        view.getPrevious().addClickListener(event -> {
            int target = navigateTo(StringUtil.ToInteger(currentComponent.getId().get()), -1, 1, 4);
            header.getProgress().setValue(target);
            animateEntranceExit(currentComponent, getContainerById(target));
        });
        view.getNext().addClickListener(event -> {
            int target = navigateTo(StringUtil.ToInteger(currentComponent.getId().get()), 1, 1, 4);
            header.getProgress().setValue(target);
            animateEntranceExit(currentComponent, getContainerById(target));
        });
    }

    private void hideContainers() {
        view.getUploadContainer().setVisible(false);
        view.getTechniqueContainer().setVisible(false);
        view.getReviewContainer().setVisible(false);
        view.getDownloadContainer().setVisible(false);
    }

    private int navigateTo(int container_id, int distance, int min, int max) {
        hideContainers();

        int target = container_id + distance;

        if (target <= min) {
            target = min;
            view.getPrevious().setVisible(false);
        }
        else if (target >= max) {
            target = max;
            view.getNext().setVisible(false);
        }
        if (target > min) {
            view.getPrevious().setVisible(true);
        }
        if (target < max) {
            view.getNext().setVisible(true);
        }

        getContainerById(target).setVisible(true);
        return target;
    }

    private Component getContainerById(int id) {
        if (id == 1)
            return view.getUploadContainer();
        else if (id == 2)
            return view.getTechniqueContainer();
        else if (id == 3)
            return view.getReviewContainer();
        else if (id == 4)
            return view.getDownloadContainer();
        else
            return view.getUploadContainer();
    }

    private void animateEntranceExit(Component oldComponent, Component newComponent) {
        int oldId = StringUtil.ToInteger(oldComponent.getId().get(), 1);
        int newId = StringUtil.ToInteger(newComponent.getId().get(), 1);

        Notification.show("old: " + oldId + ", new: " + newId);
        currentComponent = newComponent;

        if (oldId == newId)
            return;

        if (oldId < newId)
            animateToLeft(newComponent);
        else
            animateToRight(newComponent);
    }

    private AnimatedComponent ac = null;
    private Animation a = null;
    private void animateToRight(Component component) {
        if (ac != null && a != null)
            ac.stop(a);

        final Animator animator = Animator.init(UI.getCurrent());
        ac = animator.prepareComponent(component);
        a = AnimationBuilder
                .createBuilder()
                .create(AnimationTypes.EntranceAnimation.class)
                .withEffect(EntranceEffect.slideInLeft);
        ac.animate(a);
    }

    private void animateToLeft(Component component) {
        if (ac != null && a != null)
            ac.stop(a);

        final Animator animator = Animator.init(UI.getCurrent());
        ac = animator.prepareComponent(component);
        a = AnimationBuilder
                .createBuilder()
                .create(AnimationTypes.EntranceAnimation.class)
                .withEffect(EntranceEffect.slideInRight);
        ac.animate(a);
    }
}