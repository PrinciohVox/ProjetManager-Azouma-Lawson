/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.dao;


import com.mycompany.projectmanagerbackend.entities.Project;

import javax.persistence.ElementCollection;
import javax.persistence.FetchType;
import java.util.List;

/**
 *
 * @author fgotl
 */
public interface ProjectDAO extends com.mycompany.projectmanagerbackend.dao.GenericDAO<Project, Integer>{
    @ElementCollection(fetch = FetchType.LAZY)
    List<Project> findAll();
    Long projectSize();
    
}
