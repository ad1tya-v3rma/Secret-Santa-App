package com.secret.api.response;

import com.secret.api.entity.PersonEntity;

import java.util.List;
import java.util.Optional;

public class Response<T> {
    private T entity;
    private List<T> entityList;
    private boolean isNullOrEmpty;

    public Response(){}
    public Response(boolean isNullOrEmpty){
        this.isNullOrEmpty = isNullOrEmpty;
    }
    public Response(T entity)
    {
        this.isNullOrEmpty = true;
        this.entity = entity;
    }
    public Response(List<T> entityList)
    {
        this.isNullOrEmpty = true;
        this.entityList = entityList;
    }
    public List<T> getEntityList() {
        return entityList;
    }

    public void setEntityList(List<T> entityList) {
        this.entityList = entityList;
    }

    public boolean isNullOrEmpty() {
        return isNullOrEmpty;
    }

    public void setNullOrEmpty(boolean nullOrEmpty) {
        isNullOrEmpty = nullOrEmpty;
    }

    public boolean add(T entity)
    {
       Optional optionalEntity = Optional.ofNullable(entity);
       if(optionalEntity.isPresent())
       {
           return this.entityList.add(entity);
       }
           return optionalEntity.isPresent();
    }

}
