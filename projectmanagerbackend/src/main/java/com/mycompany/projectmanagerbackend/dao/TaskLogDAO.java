/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.dao;

import com.mycompany.projectmanagerbackend.entities.Task;
import com.mycompany.projectmanagerbackend.entities.TaskLog;
import com.mycompany.projectmanagerbackend.entities.User;
import java.util.Date;
import java.util.List;

/**
 *
 * @author megane
 */
public interface TaskLogDAO extends com.mycompany.projectmanagerbackend.dao.GenericDAO<TaskLog, Integer>{
    List<TaskLog>findAll();
    List<TaskLog>findByUser(User user, Date startDate, Date endDate);
    long findTaskLogCountByTask(Task task);
    long findTaskLogCountByUser(User user);
}
