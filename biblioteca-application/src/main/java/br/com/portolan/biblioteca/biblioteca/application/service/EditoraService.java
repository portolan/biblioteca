package br.com.portolan.biblioteca.biblioteca.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.portolan.biblioteca.biblioteca.application.repository.EditoraRepository;
import br.com.portolan.biblioteca.biblioteca.domain.model.Editora;


@Service
public class EditoraService extends GumgaService<Editora, Long> {

	private final EditoraRepository repository;

	@Autowired
	public EditoraService(EditoraRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
