/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.dao;
import com.mycompany.projectmanagerbackend.entities.Company;
import java.util.List;

/**
 *
 * @author megane
 */
public interface CompanyDAO extends com.mycompany.projectmanagerbackend.dao.GenericDAO<Company, Integer>{
    List<Company>findAll();
    Long companiesSize();
}
