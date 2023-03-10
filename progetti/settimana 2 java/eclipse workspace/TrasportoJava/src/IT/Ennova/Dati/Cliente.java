package IT.Ennova.Dati;

public class Cliente {

	private int ID;
	private String Nome;
	private String Cognome;
	private String Email;
	private int NumeroTelefono;
	private String Indirizzo;

	public Cliente(int iD, String nome, String cognome, String email, int numeroTelefono, String indirizzo) {
		super();
		ID = iD;
		Nome = nome;
		Cognome = cognome;
		Email = email;
		NumeroTelefono = numeroTelefono;
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
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public int getNumeroTelefono() {
		return NumeroTelefono;
	}

	public void setNumeroTelefono(int numeroTelefono) {
		NumeroTelefono = numeroTelefono;
	}

	public String getIndirizzo() {
		return Indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		Indirizzo = indirizzo;
	}

}

// l4j 
//classe java per i log : l4j puo essere editata e fare in modo che il log arrivi sul db , 
//si aggiunge come jar e come libreria quindi importato nel progetto 