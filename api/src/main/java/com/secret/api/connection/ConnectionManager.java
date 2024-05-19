package com.secret.api.connection;

import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Component;

import java.util.List;

public interface ConnectionManager<T> {
    EntityManager getEntityManager();

    void save(T t);

    void saveList(List<T> t);
}
