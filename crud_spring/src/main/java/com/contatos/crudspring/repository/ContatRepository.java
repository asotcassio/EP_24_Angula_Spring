package com.contatos.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.contatos.crudspring.model.Contat;

@Repository
public interface ContatRepository extends JpaRepository<Contat, Long> {
    
}