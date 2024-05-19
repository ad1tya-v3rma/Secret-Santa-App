package com.secret.api.services;

import com.secret.api.dao.PairDao;
import com.secret.api.entity.PairEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PairService {
    private final PairDao pairDao;
    @Autowired
    PairService(PairDao pairDao)
    {
        this.pairDao = pairDao;
    }

    public boolean saveAllPairs(List<PairEntity> pairEntities)
    {
         pairDao.saveAll(pairEntities);
         return true;
    }

    public boolean savePair(PairEntity pair)
    {
        pairDao.save(pair);
        return true;
    }
}
