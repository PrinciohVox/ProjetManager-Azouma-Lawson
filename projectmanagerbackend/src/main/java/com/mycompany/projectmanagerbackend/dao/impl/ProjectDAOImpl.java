/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.dao.impl;

import com.mycompany.projectmanagerbackend.dao.ProjectDAO;
import com.mycompany.projectmanagerbackend.entities.Project;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository("projectDAO")
@Transactional
public class ProjectDAOImpl extends com.mycompany.projectmanagerbackend.dao.impl.GenericDAOImpl<Project,Integer>implements ProjectDAO {

    public ProjectDAOImpl() {
        super(Project.class);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<Project> findAll() {
        return em.createNamedQuery("Project.findAll").getResultList();
    }
    @Override
    public Long projectSize(){
        return ((Long) em.createNamedQuery("Project.size").getSingleResult());
    }
}
