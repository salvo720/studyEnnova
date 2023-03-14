package IT.Ennova.Dati;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

@Entity
public class Cliente {
	
	@Column(name="id")
	@GeneratedValue
	private int id;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="cognome")
	private String cognome;
	
	@Column(name="email")
	private String email;
	
	@Column(name="telefono")
	private String telefono;
	
	@Column(name="indirizzo")
	private String indirizzo;

	
	
	public Cliente(int id, String nome, String cognome, String email, String telefono, String indirizzo) {
		super();
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.telefono = telefono;
		this.indirizzo = indirizzo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getIndirizzo() {
		return indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}

	
}
