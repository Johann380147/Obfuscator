package com.company.application.utils;

import com.company.application.data.entity.File;

import java.io.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class FileUtil {

    public static byte[] createZipByteArray(List<File> files) throws IOException {
        Set<String> addedNames = new HashSet<String>();

        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ZipOutputStream zipOutputStream = new ZipOutputStream(byteArrayOutputStream);
        try {
            for (File file : files) {
                if (addedNames.contains(file.getFileName()))
                    continue;

                ZipEntry zipEntry = new ZipEntry(file.getFileName());
                zipOutputStream.putNextEntry(zipEntry);
                zipOutputStream.write(file.getData());
                zipOutputStream.closeEntry();
                addedNames.add(file.getFileName());
            }
        } finally {
            zipOutputStream.close();
        }
        return byteArrayOutputStream.toByteArray();
    }
}
