package com.company.application.utils;

public class StringUtil {

    public static int ToInteger(String str) {
        return ToInteger(str, 1);
    }

    public static int ToInteger(String str, int defaultValue) {
        int value;
        try {
            value = Integer.parseInt(str);
        }
        catch (NumberFormatException e)
        {
            value = defaultValue;
        }
        return  value;
    }
}
