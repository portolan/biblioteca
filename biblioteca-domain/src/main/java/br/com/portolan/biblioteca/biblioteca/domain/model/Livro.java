package br.com.portolan.biblioteca.biblioteca.domain.model;
import io.gumga.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import io.gumga.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import io.gumga.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Livro")
@Audited
@Entity
@Table(name = "Livro")
public class Livro extends GumgaModel<Long> {

    @Version
    private Integer version;
    @Column(name = "nome")
	private String nome;
	@ManyToMany
	private Set<Assunto> assuntos;
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Autor> autores;
	@ManyToOne
	private Editora editora;

	public Livro() {
	}

	public String getNome() {
		return this.nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public Set<Assunto> getAssuntos() {
		return this.assuntos;
	}
	public void setAssuntos(Set<Assunto> assuntos) {
		this.assuntos = assuntos;
	}

	public Set<Autor> getAutores() {
		return this.autores;
	}
	public void setAutores(Set<Autor> autores) {
		this.autores = autores;
	}

	public Editora getEditora() {
		return this.editora;
	}
	public void setEditora(Editora editora) {
		this.editora = editora;
	}
}