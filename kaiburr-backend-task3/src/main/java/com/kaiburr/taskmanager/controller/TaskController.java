package com.kaiburr.taskmanager.controller;

import com.kaiburr.taskmanager.model.Task;
import com.kaiburr.taskmanager.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // or 3004 based on your React port
@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    // POST /tasks
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    // GET /tasks?name=someName
    @GetMapping
    public List<Task> getTasks(@RequestParam(required = false) String name) {
        if (name != null && !name.isEmpty()) {
            return taskService.getTasksByName(name);
        } else {
            return taskService.getAllTasks();
        }
    }
}
