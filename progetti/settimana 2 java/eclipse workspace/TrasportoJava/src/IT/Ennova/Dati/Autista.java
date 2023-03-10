package IT.Ennova.Dati;

public class Autista {

	private int ID;
	private String Nome;
	private String Cognome;
	private int Numero;

	public Autista(int iD, String nome, String cognome, int numero) {
		super();
		ID = iD;
		Nome = nome;
		Cognome = cognome;
		Numero = numero;
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

	public int getNumero() {
		return Numero;
	}

	public void setNumero(int numero) {
		Numero = numero;
	}

}
