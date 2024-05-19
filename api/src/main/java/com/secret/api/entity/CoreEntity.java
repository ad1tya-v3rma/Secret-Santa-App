package com.secret.api.entity;


import jakarta.persistence.*;
import oracle.sql.DATE;

import java.sql.Timestamp;
import java.util.Date;
@MappedSuperclass
public class CoreEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    //@GeneratedValue(GenerationType.IDENTITY)
    private Long id;
    @Column(name = "entered_timestamp")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Timestamp date;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }


    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }


}
