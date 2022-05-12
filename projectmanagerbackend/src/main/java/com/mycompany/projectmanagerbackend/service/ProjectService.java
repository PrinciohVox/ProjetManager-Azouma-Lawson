/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.service;

import com.mycompany.projectmanagerbackend.entities.Project;
import com.mycompany.projectmanagerbackend.vo.Result;
import java.util.List;

/**
 *
 * @author Administrateur
 */
public interface ProjectService {

    Result<Project> store(
            Integer idProject,
            Integer idCompany,
            String projectName,
            String actionUsername);

    Result<Project> remove(Integer idProject, String actionUsername);

    Result<Project> find(Integer idProject,String actionUsername);

    Result<List<Project>> findAll(String actionUsername);
}
