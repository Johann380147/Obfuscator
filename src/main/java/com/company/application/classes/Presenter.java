package com.company.application.classes;

import com.googlecode.gentyref.GenericTypeReflector;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Composite;
import com.vaadin.flow.internal.ReflectTools;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

/*
 * Copyright Vaadin
 * Copyright appreciated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * Instead of adding the @{@link com.vaadin.flow.router.Route} Annotations to the Views, they should be added to the
 * {@link Presenter} class, the View should be the Wildcard of the the {@link Presenter}. Since the {@link Presenter}
 * is derived from {@link Composite} make sure to give it's documentation a read, it has some restrictions. The user is
 * not required to instantiate the model and neither the view, this will be done automatically by {@link Presenter}
 * respectively {@link Composite}. The Model can be instantiated using the custom constructor.
 * <p>
 * The MVP Pattern consists of three "roles"
 * Model        - providing
 * View         - displaying
 * Presenter    - communicator
 * <p>
 * In Vaadin a "View" are usually represented by classes that are derived from {@link Component} (but it can be argued
 * that a {@link Component} is not always a view). For the sake of simplicity this is being ignored.
 * The classes {@link Model} and {@link Presenter} are not represented in Vaadin since it is a UI-Framework after all.
 *
 * @param <M> Wildcard that is required to implement {@link Model}.
 * @param <V> Wildcard that is required to extend {@link Component}.
 */
public abstract class Presenter<M extends Model<M>, V extends Component> extends Composite<V> {
    private M model;

    /**
     * Constructor to initialise the {@link Model} automatically.
     */
    public Presenter() {
        model = initModel();
    }

    /**
     * Called when the constructor of this {@link Presenter} is called.
     * <p>
     * This method initializes the {@link Model} and returns it.
     * <p>
     * By default, this method uses reflection to instantiate the {@link Model}
     * based on the generic type of the sub class.
     *
     * @return the {@link Model} of the {@link Presenter} never {@code null}
     * <p>
     * Code + comment is from {@link Composite#initContent()} (See Copyright notice) and modified to initialize the Model.
     */
    @SuppressWarnings("unchecked")
    protected M initModel() {
        return (M) ReflectTools.createInstance(findContentType((Class<? extends Presenter<?, ?>>) this.getClass()));
    }

    /**
     * Code taken from {@link Composite# findContentType(Class)} (See Copyright notice) and modified to initialize the Model instead.
     *
     * @param modelClass
     * @return
     */
    private static Class<? extends Model> findContentType(Class<? extends Presenter<?, ?>> modelClass) {
        Type type = GenericTypeReflector.getTypeParameter(modelClass.getGenericSuperclass(), Presenter.class.getTypeParameters()[0]);
        if (!(type instanceof Class) && !(type instanceof ParameterizedType)) {
            throw new IllegalStateException("Presenter is used as raw type: either add type information or override initModel().");
        } else {
            return GenericTypeReflector.erase(type).asSubclass(Model.class);
        }
    }

    /**
     * Constructor to initialise the {@link Model} manually.
     *
     * @param model the model to inject into the {@link Presenter}
     */
    public Presenter(M model) {
        this.model = model;
    }

    public M getModel() {
        return model;
    }
}