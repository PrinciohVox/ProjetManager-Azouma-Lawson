/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.service;

import com.mycompany.projectmanagerbackend.entities.Task;
import com.mycompany.projectmanagerbackend.vo.Result;
import java.util.List;

/**
 *
 * @author Administrateur
 */
public interface TaskService {

    Result<Task> store(
            Integer idTask,
            Integer idProject,
            String taskName,
            String actionUsername);

    Result<Task> remove(Integer idTask, String actionUsername);

    Result<Task> find(Integer idTask, String actionUsername);

    Result<List<Task>> findAll(String actionUsername);
}
