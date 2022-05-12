/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.dao.impl;

import com.mycompany.projectmanagerbackend.dao.TaskDAO;
import com.mycompany.projectmanagerbackend.entities.Task;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository("taskDAO")
@Transactional
public class TaskDAOImpl extends com.mycompany.projectmanagerbackend.dao.impl.GenericDAOImpl<Task,Integer>implements TaskDAO {

    public TaskDAOImpl() {
        super(Task.class);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<Task> findAll() {
        return em.createNamedQuery("Task.findAll").getResultList();
    }

    @Override
    public Long taskSize(){
        return ((Long) em.createNamedQuery("Task.size").getSingleResult());
    }
}
