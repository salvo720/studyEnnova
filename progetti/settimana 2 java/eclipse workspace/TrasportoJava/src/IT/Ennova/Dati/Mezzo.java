package IT.Ennova.Dati;

public class Mezzo {

	private int ID;
	private String Tipologia;
	private String Targa;
	private int Prezzo;

	public Mezzo(int iD, String tipologia, String targa, int prezzo) {
		super();
		ID = iD;
		Tipologia = tipologia;
		Targa = targa;
		Prezzo = prezzo;
	}

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getTipologia() {
		return Tipologia;
	}

	public void setTipologia(String tipologia) {
		Tipologia = tipologia;
	}

	public String getTarga() {
		return Targa;
	}

	public void setTarga(String targa) {
		Targa = targa;
	}

	public int getPrezzo() {
		return Prezzo;
	}

	public void setPrezzo(int prezzo) {
		Prezzo = prezzo;
	}

}
