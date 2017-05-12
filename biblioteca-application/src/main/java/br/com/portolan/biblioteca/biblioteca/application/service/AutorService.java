package br.com.portolan.biblioteca.biblioteca.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.portolan.biblioteca.biblioteca.application.repository.AutorRepository;
import br.com.portolan.biblioteca.biblioteca.domain.model.Autor;


@Service
public class AutorService extends GumgaService<Autor, Long> {

	private final AutorRepository repository;

	@Autowired
	public AutorService(AutorRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
