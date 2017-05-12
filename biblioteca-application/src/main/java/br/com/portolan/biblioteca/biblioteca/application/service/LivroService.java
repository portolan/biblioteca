package br.com.portolan.biblioteca.biblioteca.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.portolan.biblioteca.biblioteca.application.repository.LivroRepository;
import br.com.portolan.biblioteca.biblioteca.domain.model.Livro;

import br.com.portolan.biblioteca.biblioteca.domain.model.Assunto;
import br.com.portolan.biblioteca.biblioteca.domain.model.Autor;

@Service
public class LivroService extends GumgaService<Livro, Long> {

	private final LivroRepository repository;

	@Autowired
	public LivroService(LivroRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public Livro loadLivroFat(Long id) {
		Livro obj = view(id);	
		
		Hibernate.initialize(obj.getAssuntos());
		Hibernate.initialize(obj.getAssuntos());
		Hibernate.initialize(obj.getAutores());
		Hibernate.initialize(obj.getAssuntos());
		Hibernate.initialize(obj.getAutores());
		
		
		return obj;
	}
}
