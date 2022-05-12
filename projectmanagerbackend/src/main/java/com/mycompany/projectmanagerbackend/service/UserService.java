/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.service;

import com.mycompany.projectmanagerbackend.entities.User;
import com.mycompany.projectmanagerbackend.vo.Result;
import java.util.List;

/**
 *
 * @author Administrateur
 */
public interface UserService {

    Result<User> store(
            String username,
            String firstName,
            String lastName,
            String email,
            String password,
            Character adminRole,
            String actionUsername);

    Result<User> remove(String username, String actionUsername);

    Result<User> find(String username, String actionUsername);

    Result<List<User>> findAll(String actionUsername);

    Result<User> findByUsernamePassword(String username, String password);
}
