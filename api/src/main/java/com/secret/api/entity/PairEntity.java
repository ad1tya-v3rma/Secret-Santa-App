package com.secret.api.entity;

import jakarta.persistence.*;

@Entity
@Table(name="PAIR")
public class PairEntity extends CoreEntity{
     @Column(name = "SENDER")
    private String sender;

    @Column(name = "RECEIVER")
    private String receiver;

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }


}
