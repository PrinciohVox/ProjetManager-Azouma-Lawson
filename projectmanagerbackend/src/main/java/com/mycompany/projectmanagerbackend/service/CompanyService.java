/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.service;

/**
 *
 * @author Administrateur
 */
import com.mycompany.projectmanagerbackend.entities.Company;
import com.mycompany.projectmanagerbackend.vo.Result;
import java.util.List;

public interface CompanyService {

    Result<Company> store(Integer idCompany,String companyName,String actionUsername);

    Result<Company> remove(Integer idCompany,String actionUsername);

    Result<Company> find(Integer idCompany,String actionUsername);

    Result<List<Company>> findAll(String actionUsername);
    List<Company> nfindAll(String actionUsername);

    void nstore(Integer idCompany,String companyName,String actionUsername);
    void nremove(Integer idCompany,String actionUsername);


}
