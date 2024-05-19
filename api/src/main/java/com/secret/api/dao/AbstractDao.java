package com.secret.api.dao;

import com.secret.api.entity.PersonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface AbstractDao <T, ID> extends JpaRepository<T, ID>{

    @Query("select a from PersonEntity a")
    List<PersonEntity> getAll();

}
