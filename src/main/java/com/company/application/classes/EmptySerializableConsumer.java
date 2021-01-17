package com.company.application.classes;

import com.vaadin.flow.function.SerializableConsumer;

import java.util.function.Consumer;

public class EmptySerializableConsumer implements SerializableConsumer {

    @Override
    public void accept(Object o) {

    }

    @Override
    public Consumer andThen(Consumer after) {
        return null;
    }
}
