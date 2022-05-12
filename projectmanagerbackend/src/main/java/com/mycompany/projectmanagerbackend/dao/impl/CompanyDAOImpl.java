/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.dao.impl;

import com.mycompany.projectmanagerbackend.dao.CompanyDAO;
import com.mycompany.projectmanagerbackend.entities.Company;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;

import javax.transaction.Transactional;
import java.util.List;

@Repository("companyDAO")
@Transactional
public class CompanyDAOImpl extends com.mycompany.projectmanagerbackend.dao.impl.GenericDAOImpl<Company,Integer> implements CompanyDAO {

    public CompanyDAOImpl() {
        super(Company.class);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<Company> findAll() {
        return em.createNamedQuery("Company.findAll").getResultList();
    }
    @Override
    public Long companiesSize(){
        return ((Long) em.createNamedQuery("Company.size").getSingleResult());
    }
}
