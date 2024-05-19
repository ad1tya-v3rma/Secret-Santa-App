package com.secret.api.connection;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ConnectionManagerImpl implements ConnectionManager {
    private final EntityManager entityManager;

    @Autowired
    ConnectionManagerImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public EntityManager getEntityManager() {
        return entityManager;
    }

    @Override
    @Transactional
    public void save(Object object) {
        if (!entityManager.contains(object)) {
            entityManager.merge(object);
        } else {
            entityManager.persist(object);
        }
    }

    @Override
    @Transactional
    public void saveList(List o) {
        for (Object object : o) {
            if (!entityManager.contains(object)) {
                entityManager.merge(object);
            } else {
                entityManager.persist(object);
            }
        }
    }
}
