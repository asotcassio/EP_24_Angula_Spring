package com.contatos.crudspring;
import com.contatos.crudspring.model.Contat;
import com.contatos.crudspring.repository.ContatRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(ContatRepository contatRepository){
		return args -> {
			contatRepository.deleteAll();

			Contat c = new Contat();
			c.setName("cassio");
			c.setTelefone("1234567899");

			contatRepository.save(c);
		};
	}
}
