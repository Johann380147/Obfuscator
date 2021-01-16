package com.company.application.presenters.obfuscate;

import com.company.application.classes.Presenter;
import com.company.application.data.entity.File;
import com.company.application.data.service.FileService;
import com.company.application.models.obfuscate.ObfuscateModel;
import com.company.application.utils.StringUtil;
import com.company.application.views.main.MainView;
import com.company.application.views.obfuscate.ObfuscateView;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.upload.receivers.MultiFileMemoryBuffer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;
import com.vaadin.flow.server.StreamResource;
import de.mekaso.vaadin.addon.compani.AnimatedComponent;
import de.mekaso.vaadin.addon.compani.Animator;
import de.mekaso.vaadin.addon.compani.animation.Animation;
import de.mekaso.vaadin.addon.compani.animation.AnimationBuilder;
import de.mekaso.vaadin.addon.compani.animation.AnimationTypes;
import de.mekaso.vaadin.addon.compani.effect.EntranceEffect;
import org.apache.commons.io.IOUtils;

import java.io.ByteArrayInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;


@PageTitle("Obfuscate")
@RouteAlias(value = "", layout = MainView.class)
@Route(value = "home", layout = MainView.class)
public class ObfuscatePresenter extends Presenter<ObfuscateModel, ObfuscateView> {

    private final MainView header;
    private final ObfuscateView view;
    private final ObfuscateModel model;

    private final ArrayList<Checkbox> checkboxes;
    private final ArrayList<Integer> uploadedFileIds = new ArrayList<>();
    private Component currentComponent;

    public ObfuscatePresenter(FileService service) {
        header = MainView.getInstance();
        view = getContent();
        model = getModel();
        model.setService(service);

        currentComponent = view.getUploadContainer();

        checkboxes = view.setTechniques(model.getTechniques());
        view.setFileListItems(new ArrayList<String>() {{ add("Sample File 1"); add("Sample File 2"); }});
        InitListeners();
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
                uploadedFileIds.add(id);
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    private void addTechniqueListener() {
        for (Checkbox checkbox : checkboxes) {
            checkbox.addValueChangeListener(event -> {
                if (event.getValue() == null) {
                    model.getTechniques().replace(checkbox.getLabel(), false);
                } else {
                    model.getTechniques().replace(checkbox.getLabel(), true);
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

           /* List<File> files = model.getFiles(uploadedFileIds);
            FileOutputStream fos = new FileOutputStream("multiCompressed.zip");
            ZipOutputStream zipOut = new ZipOutputStream(fos);
            for (File file : files) {
                 new ByteArrayInputStream(file.getData());
                ZipEntry zipEntry = new ZipEntry(file.getFileName());
                zipOut.putNextEntry(zipEntry);

                byte[] bytes = new byte[1024];
                int length;
                while((length = fis.read(bytes)) >= 0) {
                    zipOut.write(bytes, 0, length);
                }
                fis.close();
            }
            zipOut.close();
            fos.close();
            Anchor anchor = new Anchor(new StreamResource("filename.class", ByteArrayInputStream()));*/
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