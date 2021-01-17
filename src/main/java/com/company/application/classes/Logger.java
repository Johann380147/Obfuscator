package com.company.application.classes;

import java.util.logging.Level;

public class Logger  {
    public static void log(String className, Level level, Throwable exception) {
        java.util.logging.Logger.getLogger(className).log(level, null, exception);
    }
}
