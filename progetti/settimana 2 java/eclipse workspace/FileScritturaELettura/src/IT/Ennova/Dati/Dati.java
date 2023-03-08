package IT.Ennova.Dati;

public class Dati {

	/**
	 * @param nome e richiesto l'inserimento di una stringa di almeno 3 caratteri
	 */
	private String nome;
	private String cognome;
	private String citta;
	private String telefono;
	private boolean errore;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {

		if (nome.length() > 2) {
			this.nome = nome;
		} else {
//				errore bloccante 
//				throw new IllegalArgumentException ("il nome deve avere una lugnhezza minima di 2 caratteri ");
//				errore non bloccante 
				errore = true;
		}

	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		if (telefono.length() >= 5) {
			this.telefono = telefono;
		} else {
			throw new IllegalArgumentException("il numero di telefono deve avere una lunghezza di alemno 5 numeri ");
		}
	}

}
