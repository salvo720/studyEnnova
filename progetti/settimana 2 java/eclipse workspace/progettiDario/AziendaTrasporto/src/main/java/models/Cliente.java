package models;

public class Cliente {
	private int id;
	private String nome;
	private String cognome;
	private String telefono;
	private String email;
	private String indirizzo;
	
	public Cliente(int id, String nome, String cognome, String telefono, String email, String indirizzo) {
		
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
		this.telefono = telefono;
		this.email = email;
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

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getIndirizzo() {
		return indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}

	@Override
	public String toString() {
		return "Cliente [id=" + id + ", nome=" + nome + ", cognome=" + cognome + ", telefono=" + telefono + ", email="
				+ email + ", indirizzo=" + indirizzo + "]";
	}
	
	
	
}
