package com.kaiburr.taskmanager.service;

import com.kaiburr.taskmanager.model.Task;
import com.kaiburr.taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // Create or update a task
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    // Search for tasks by name
    public List<Task> getTasksByName(String name) {
        return taskRepository.findByNameContainingIgnoreCase(name);
    }

    // Get all tasks
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}
