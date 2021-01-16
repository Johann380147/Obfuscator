package com.company.application.models.obfuscate;

import com.company.application.classes.Model;

import java.util.HashMap;

public class ObfuscateModel implements Model<ObfuscateModel> {
    private final HashMap<String, Boolean> techniques;

    public ObfuscateModel() {
        techniques = new HashMap<String, Boolean>() {{
            put("Technique 1", true);
            put("Technique 2", true);
            put("Technique 3", true);
            put("Technique 4", false);
            put("Technique 5", false);
            put("Technique 6", false);
        }};
    }

    public HashMap<String, Boolean> getTechniques() {
        return techniques;
    }
}