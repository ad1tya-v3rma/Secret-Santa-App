package com.secret.api.services;

import com.secret.api.dao.PersonDao;
import com.secret.api.entity.PersonEntity;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class PersonService {
    private final PersonDao personDao;
    private int test;

    private String str;

    @Autowired
    PersonService(PersonDao personDao)
    {
        this.personDao = personDao;
    }

    public List<PersonEntity> getAllParticipants()
    {
        /*Predicate<PersonEntity> predicate = person -> person.getId() > 10;
        Function<PersonEntity , PersonEntity> function = (person -> new PersonEntity());*/
        return personDao.getAll();//.stream().map(function).collect(Collectors.toList());
    }

    public Optional<PersonEntity> getById(Integer id)
    {
        return personDao.findById(id);
    }

    public boolean savePerson(PersonEntity person)
    {
       personDao.save(person);
       return true;
    }

    public boolean saveAllPersons(List<PersonEntity> entityList)
    {
        personDao.saveAll(entityList);
        return true;
    }
    public int getTest() {
        return test;
    }

    public void setTest(int test) {
        this.test = test;
    }

    public String getStr() {
        return str;
    }

    public void setStr(String str) {
        this.str = str;
    }
}
