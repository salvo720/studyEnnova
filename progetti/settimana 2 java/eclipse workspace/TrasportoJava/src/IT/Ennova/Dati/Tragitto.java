package IT.Ennova.Dati;

import java.sql.Date;

public class Tragitto {

	private int ID;
	private Date Data;
	private String Citta;
	private int KM;
	private int IDmezzo;
	private int IDcliente;
	private int IDautista;
	
	public Tragitto(int iD, Date data, String citta, int kM, int iDmezzo, int iDcliente, int iDautista) {
		super();
		ID = iD;
		Data = data;
		Citta = citta;
		KM = kM;
		IDmezzo = iDmezzo;
		IDcliente = iDcliente;
		IDautista = iDautista;
	}
	public int getKM() {
		return KM;
	}
	public void setKM(int kM) {
		KM = kM;
	}
	public Date getData() {
		return Data;
	}
	public void setData(Date data) {
		Data = data;
	}
	public String getCitta() {
		return Citta;
	}
	public void setCitta(String citta) {
		Citta = citta;
	}
	public int getIDcliente() {
		return IDcliente;
	}
	public void setIDcliente(int iDcliente) {
		IDcliente = iDcliente;
	}
	public int getIDmezzo() {
		return IDmezzo;
	}
	public void setIDmezzo(int iDmezzo) {
		IDmezzo = iDmezzo;
	}
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public int getIDautista() {
		return IDautista;
	}
	public void setIDautista(int iDautista) {
		IDautista = iDautista;
	}

	
}
