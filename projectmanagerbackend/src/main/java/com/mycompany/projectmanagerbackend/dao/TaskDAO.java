/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.dao;
import com.mycompany.projectmanagerbackend.entities.Task;
import java.util.List;

/**
 *
 * @author fgotl
 */
public interface TaskDAO extends com.mycompany.projectmanagerbackend.dao.GenericDAO<Task, Integer>{
    List<Task>findAll();
    Long taskSize();
}
