package IT.Ennova.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "Cliente")
public class Cliente {
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ID;
	@Column(name = "nome")
	private String Nome;
	@Column(name = "cognome")
	private String Cognome;
	@Column(name = "email")
	private String email;
	@Column(name = "telefono")
	private String Telefono;
	@Column(name = "Indirizzo")
	private String Indirizzo;

	public Cliente(int iD, String nome, String cognome, String email, String telefono, String indirizzo) {
		super();
		ID = iD;
		Nome = nome;
		Cognome = cognome;
		this.email = email;
		Telefono = telefono;
		Indirizzo = indirizzo;
	}

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public String getCognome() {
		return Cognome;
	}

	public void setCognome(String cognome) {
		Cognome = cognome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefono() {
		return Telefono;
	}

	public void setTelefono(String telefono) {
		Telefono = telefono;
	}

	public String getIndirizzo() {
		return Indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		Indirizzo = indirizzo;
	}

}
