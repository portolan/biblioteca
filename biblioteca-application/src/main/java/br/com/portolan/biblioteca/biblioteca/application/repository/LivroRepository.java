package br.com.portolan.biblioteca.biblioteca.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import br.com.portolan.biblioteca.biblioteca.domain.model.Livro;

public interface LivroRepository extends GumgaCrudRepository<Livro, Long> {
}