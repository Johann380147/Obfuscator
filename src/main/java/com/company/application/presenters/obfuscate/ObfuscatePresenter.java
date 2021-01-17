package com.company.application.presenters.obfuscate;

import com.company.application.classes.EmptySerializableConsumer;
import com.company.application.classes.Logger;
import com.company.application.classes.Presenter;
import com.company.application.data.entity.File;
import com.company.application.data.service.FileService;
import com.company.application.models.obfuscate.ObfuscateModel;
import com.company.application.utils.FileUtil;
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
import org.apache.commons.io.IOUtils;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Level;


@PageTitle("Obfuscate")
@RouteAlias(value = "", layout = MainView.class)
@Route(value = "home", layout = MainView.class)
public class ObfuscatePresenter extends Presenter<ObfuscateModel, ObfuscateView> {

    private final MainView header;
    private final ObfuscateView view;
    private final ObfuscateModel model;

    private final ArrayList<Checkbox> checkboxes;
    private final HashMap<Integer, String> uploadedFileIds = new HashMap<>();
    private Component currentComponent;

    public ObfuscatePresenter(FileService service) {
        header = MainView.getInstance();
        view = getContent();
        model = getModel();
        model.setService(service);

        checkboxes = view.setTechniques(model.getTechniques());

        InitDefaultComponentParameters();
        InitListeners();
    }

    private void InitDefaultComponentParameters() {
        setEnableDownload(false);
        view.getAnchor().setSuffix(".zip");
        view.setFileListItems(new ArrayList<String>() {{ add("Sample File 1"); add("Sample File 2"); }});
        currentComponent = view.getUploadContainer();
    }

    private void InitListeners() {
        addUploadListener();
        addTechniqueListener();
        addFileListListener();
        addDownloadListener();
        addNavigationButtonListeners();
    }

    private void addUploadListener() {
        // To implement: store uploaded files and set filelist
        // To implement: store name of first item when uploading and set value
        // view.getFileList().setValue("Sample File 1");
        MultiFileMemoryBuffer buffer = new MultiFileMemoryBuffer();
        view.getUpload().setReceiver(buffer);
        view.getUpload().addSucceededListener(event -> {
            InputStream in = buffer.getInputStream(event.getFileName());
            try {
                int id = getModel().addFile(
                        event.getFileName(),
                        event.getMIMEType(),
                        IOUtils.toByteArray(in),
                        LocalDateTime.now());
                uploadedFileIds.put(id, event.getFileName());
                setEnableDownload(true);
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
        view.getUpload().addStartedListener(event -> {
            if (uploadedFileIds.containsValue(event.getFileName())) {
                event.getUpload().interruptUpload();
                Notification.show("Files cannot have same name and must be < 10mb", 4000, Notification.Position.MIDDLE);
            }
        });
        view.getUpload().addFileRejectedListener(event -> {
            Notification.show("Files cannot have same name and must be < 10mb", 4000, Notification.Position.MIDDLE);
        });
        view.getUpload().addFileRemoveListener(event -> {
            clearAll(true);
        });
    }

    private void addTechniqueListener() {
        for (Checkbox checkbox : checkboxes) {
            checkbox.addValueChangeListener(event -> {
                if (event.getValue() == null) {
                    model.getTechniques().put(checkbox.getLabel(), false);
                } else {
                    model.getTechniques().put(checkbox.getLabel(), true);
                }
            });
        }
    }

    private void addFileListListener() {
        view.getFileList().addSelectionListener(event -> {
            // To implement: Obfuscate targeted file and display
            event.getFirstSelectedItem().ifPresent(item -> view.setBeforeText(item.toString()));
            view.setAfterText("");
        });
    }

    private void addDownloadListener() {
        view.getDownload().addClickListener(event -> {
            if (uploadedFileIds.size() == 0) {
                Notification.show(
                        "There are either no files uploaded or they have expired.\nUploaded files will expire every 2 hours",
                        5000,
                        Notification.Position.MIDDLE);
                return;
            }

            List<File> files = model.getFiles(uploadedFileIds.keySet());
            if (files.size() == 0) {
                Notification.show(
                        "There are either no files uploaded or they have expired.\nUploaded files will expire every 2 hours",
                        5000,
                        Notification.Position.MIDDLE);
                clearAll(false);
            }
            else {
                view.getAnchor().setFileHandler(
                    outputStream -> {
                        try {
                            byte[] stream = FileUtil.createZipByteArray(files);
                            outputStream.write(stream);
                        } catch (IOException ex) {
                            Logger.log(this.getClass().toString(), Level.SEVERE, ex);
                        }
                    });
            }
        });
    }

    private void addNavigationButtonListeners() {
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
            view.getPrevious().setEnabled(false);
        }
        else if (target >= max) {
            target = max;
            view.getNext().setEnabled(false);
        }
        if (target > min) {
            view.getPrevious().setEnabled(true);
        }
        if (target < max) {
            view.getNext().setEnabled(true);
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

    private void clearAll(Boolean deleteFilesFromRepository) {
        view.getUpload().getElement().executeJs("this.files=[]");
        setEnableDownload(false);

        // Files that were not deleted will still be cleaned up in a scheduled task that deletes all files older than 2hrs
        if (deleteFilesFromRepository) {
            model.deleteFiles(uploadedFileIds.keySet());
        }
        uploadedFileIds.clear();
    }

    private void setEnableDownload(Boolean isEnabled) {
        view.getDummyDownload().setVisible(!isEnabled);
        view.getAnchor().setVisible(isEnabled);

        if (isEnabled == false) {
            view.getAnchor().setFileHandler(new EmptySerializableConsumer());
        }
    }

    private void animateEntranceExit(Component oldComponent, Component newComponent) {
        int oldId = StringUtil.ToInteger(oldComponent.getId().get(), 1);
        int newId = StringUtil.ToInteger(newComponent.getId().get(), 1);

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