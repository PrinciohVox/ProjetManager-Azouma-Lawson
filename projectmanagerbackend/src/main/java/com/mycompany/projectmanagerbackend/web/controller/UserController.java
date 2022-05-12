
package com.mycompany.projectmanagerbackend.web.controller;


import com.mycompany.projectmanagerbackend.dao.UserDAO;
import com.mycompany.projectmanagerbackend.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController implements Serializable {

    private final UserDAO userDAO;

    @Autowired
    public UserController(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @PostMapping("/login")
    public ResponseEntity<?>loginUser(@RequestBody User userData){
        System.out.println(userData);
        User user = userDAO.findByEmail(userData.getEmail());
        if(user.getPassword().equals(userData.getPassword()))
            return ResponseEntity.ok(user);

        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }

//    @PostMapping("/userSave")
//    public ResponseEntity<User>registerUser(@RequestBody User user){
//        return ResponseEntity.ok(userDAO.saveUser(user));
//    }

    //    public User save (@PathVariable User user){
//            return userDAO.saveUser(user);
//        }
//
    /*@GetMapping("/user")
    public List<User> findUser(){
        return userDAO.findAll();
    }*/
//    @CrossOrigin(origins = "*")
    @GetMapping("/usersList")
    public ResponseEntity<List<User>>findUser(){
        List<User> users = userDAO.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

}
