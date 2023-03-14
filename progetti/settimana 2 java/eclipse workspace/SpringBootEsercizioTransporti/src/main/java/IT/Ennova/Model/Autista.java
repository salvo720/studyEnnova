package IT.Ennova.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "Autista")
public class Autista {
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "nome")
	private String nome;
	@Column(name = "cognome")
	private String cognome;
	@Column(name = "numero")
	private String telefono;
	@Column(name = "indirizzo")
	private String indirizzo;

	@Column(name = "email")
	private String email;

	@Column(name = "data_nascita")
	private String data_nascita;

	@Column(name = "data_assunzione")
	private String data_assunzione;

	@Column(name = "patente")
	private String patente;

	@Column(name = "stato")
	private boolean stato;

	public Autista(int id, String nome, String cognome, String telefono, String indirizzo, String email,
			String data_nascita, String data_assunzione, String patente, boolean stato) {
		super();
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
		this.telefono = telefono;
		this.indirizzo = indirizzo;
		this.email = email;
		this.data_nascita = data_nascita;
		this.data_assunzione = data_assunzione;
		this.patente = patente;
		this.stato = stato;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getData_nascita() {
		return data_nascita;
	}

	public void setData_nascita(String data_nascita) {
		this.data_nascita = data_nascita;
	}

	public String getData_assunzione() {
		return data_assunzione;
	}

	public void setData_assunzione(String data_assunzione) {
		this.data_assunzione = data_assunzione;
	}

	public String getPatente() {
		return patente;
	}

	public void setPatente(String patente) {
		this.patente = patente;
	}

	public boolean isStato() {
		return stato;
	}

	public void setStato(boolean stato) {
		this.stato = stato;
	}

}
