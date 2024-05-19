package com.secret.api.save;

import com.secret.api.entity.PairEntity;
import com.secret.api.entity.PersonEntity;
import com.secret.api.services.PairService;
import com.secret.api.services.PersonService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SaveController {
    private final PersonService personService;
    private final PairService pairService;

    @Autowired
    SaveController(PersonService personService, PairService pairService){
        this.personService = personService;
        this.pairService = pairService;
    }

    @CrossOrigin
    @PostMapping(value = "/savePair", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean savePair(@RequestBody PairEntity pair){
        return pairService.savePair(pair);
    }

    @CrossOrigin
    @PostMapping(value = "/savePerson", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean savePerson(@RequestBody PersonEntity person)
    {
        personService.savePerson(person);
        return true;
    }

    @CrossOrigin
    @Transactional
    @PostMapping(value = "/savePersons",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveList(@RequestBody List<PersonEntity> personEntities){
        return personService.saveAllPersons(personEntities);
    }

    @CrossOrigin
    @PostMapping(value = "/savePairs", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean savePairs(@RequestBody List<PairEntity> pairEntities){
        return pairService.saveAllPairs(pairEntities);
    }

}
