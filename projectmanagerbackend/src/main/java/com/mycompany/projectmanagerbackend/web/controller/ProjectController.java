
package com.mycompany.projectmanagerbackend.web.controller;

import com.mycompany.projectmanagerbackend.dao.ProjectDAO;
import com.mycompany.projectmanagerbackend.entities.Project;
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
@RequestMapping("/project")
public class ProjectController implements Serializable {

    private final ProjectDAO projectDAO;

    @Autowired
    public ProjectController(ProjectDAO projectDAO) {
        this.projectDAO = projectDAO;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/projectsList")
    public ResponseEntity<List<Project>> projectList(){
        List<Project> projects = projectDAO.findAll();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/projectsSize")
    public ResponseEntity<Long> projectSize(){
        Long projSize = projectDAO.projectSize();
        return new ResponseEntity<>(projSize,HttpStatus.OK);
    }
}