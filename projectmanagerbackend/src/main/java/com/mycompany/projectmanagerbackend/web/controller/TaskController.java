
package com.mycompany.projectmanagerbackend.web.controller;

import com.mycompany.projectmanagerbackend.dao.TaskDAO;
import com.mycompany.projectmanagerbackend.entities.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("/task")
public class TaskController implements Serializable {

    private final TaskDAO taskDAO;

    @Autowired
    public TaskController(TaskDAO taskDAO) {
        this.taskDAO = taskDAO;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/tasksList")
    public ResponseEntity<List<Task>> taskList(){
        List<Task> tasks = taskDAO.findAll();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/tasksSize")
    public ResponseEntity<Long> taskSize(){
        Long taskSize = taskDAO.taskSize();
        return new ResponseEntity<>(taskSize,HttpStatus.OK);
    }


}