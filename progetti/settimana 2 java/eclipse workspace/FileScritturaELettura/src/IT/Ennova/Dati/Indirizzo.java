package IT.Ennova.Dati;

public class Indirizzo {
	private int id;
	private String via;
	private int numero;
	private int cap;
	private String citta;
	
	
	
	public Indirizzo(int id, String via, int numero, int cap, String citta) {
		super();
		this.id = id;
		this.via = via;
		this.numero = numero;
		this.cap = cap;
		this.citta = citta;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getVia() {
		return via;
	}
	public void setVia(String via) {
		this.via = via;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public int getCap() {
		return cap;
	}
	public void setCap(int cap) {
		this.cap = cap;
	}
	public String getCitta() {
		return citta;
	}
	public void setCitta(String citta) {
		this.citta = citta;
	}

}
