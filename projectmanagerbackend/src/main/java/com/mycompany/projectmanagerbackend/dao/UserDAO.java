package com.mycompany.projectmanagerbackend.dao;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.mycompany.projectmanagerbackend.entities.User;
import java.util.List;

/**
 *
 * @author fgotl
 */
public interface UserDAO extends GenericDAO<User, String>{
    List<User>findAll();
    User findByUsernameAndPassword(String username, String password);
    User findByUsername(String username);
    User findByEmail(String email);
}

