package com.secret.api.fetch;

import com.secret.api.entity.PersonEntity;
import com.secret.api.response.Response;
import com.secret.api.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class FetchController {

    private final PersonService personService;

    @Autowired
    FetchController(PersonService personService)
    {
        this.personService = personService;
    }

    @CrossOrigin
    @GetMapping("/getList")
    public List<PersonEntity> getAllRecords()
    {
        return personService.getAllParticipants();
    }

    @CrossOrigin
    @GetMapping("/getById/{id}")
    public Response<PersonEntity> getRecordById(@PathVariable Integer id)
    {
        System.out.println("this is a test"+personService.getTest());
        System.out.println("ths is a test string"+personService.getStr());
        if(personService.getById(id).isPresent())
        {
            return new Response(personService.getById(id).get());
        }
        else
        {
            return new Response(false);
        }
    }
}
