package br.com.portolan.biblioteca.biblioteca.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.portolan.biblioteca.biblioteca.application.repository.AssuntoRepository;
import br.com.portolan.biblioteca.biblioteca.domain.model.Assunto;


@Service
public class AssuntoService extends GumgaService<Assunto, Long> {

	private final AssuntoRepository repository;

	@Autowired
	public AssuntoService(AssuntoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
