package com.secret.api.dao;

import com.secret.api.entity.PersonEntity;
import org.springframework.stereotype.Repository;
@Repository
public interface PersonDao extends AbstractDao<PersonEntity, Integer> {
}
