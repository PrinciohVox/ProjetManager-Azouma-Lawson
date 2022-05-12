
package com.mycompany.projectmanagerbackend.web.controller;

import com.mycompany.projectmanagerbackend.dao.CompanyDAO;
import com.mycompany.projectmanagerbackend.entities.Company;
import com.mycompany.projectmanagerbackend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/company")

public class CompanyController implements Serializable {

    final CompanyService companyService;
    //@Autowired
    //private User actionUser;

    private final CompanyDAO companyDAO;

    @Autowired
    public CompanyController(CompanyService companyService, /*User actionUser,*/ CompanyDAO companyDAO) {
        this.companyService = companyService;
        //this.actionUser = actionUser;
        this.companyDAO = companyDAO;
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/companiesList")
    public ResponseEntity<List<Company>> listeComp(){
        List<Company> companies = companyService.nfindAll("megane");
        return new ResponseEntity<>(companies,HttpStatus.OK);
    }




    @CrossOrigin(origins = "*")
    @GetMapping("/companiesSize")
    public ResponseEntity<Long> compSize(){
        Long compSize = companyDAO.companiesSize();
        return new ResponseEntity<>(compSize,HttpStatus.OK);
    }


    /*@GetMapping("/Companies")
    public ResponseEntity<List<Company>> listeComp(){
        List<Company>companies = companyDAO.findAll();
        return new ResponseEntity<>(companies,HttpStatus.OK);
    }*/
    /*
    @GetMapping("/Company")
    public List<Company> listeComp(){

        return (List<Company>) companyDAO.findAll();
    }*/

    /*@GetMapping("/Company")
    public Result <Company> getAllCompanies(){
        boolean sucees = true;
        List<Company> companies = (List<Company>) companyService.findAll("jackdev");
        return new Result <Company>(sucees, (Company) companies);
    }*/

}