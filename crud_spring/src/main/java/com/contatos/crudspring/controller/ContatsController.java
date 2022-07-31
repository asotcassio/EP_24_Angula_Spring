package com.contatos.crudspring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.contatos.crudspring.model.Contat;
import com.contatos.crudspring.repository.ContatRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/contats")
@AllArgsConstructor
public class ContatsController {

    private final ContatRepository contatRepository;

    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public @ResponseBody List<Contat> list() {
        return contatRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Contat> create(@RequestBody Contat contat) {
       //return contatRepository.save(contat);
       return ResponseEntity.status(HttpStatus.CREATED).body(contatRepository.save(contat));
    }
}