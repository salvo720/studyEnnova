package models;

public class Viaggio {
	private int id;
	private String descrizione;
	private String data;
	private double km;
	private int id_autista;
	private int id_cliente;
	private int id_mezzo;
	
	public Viaggio(int id, String descrizione, String data, double km, int id_autista, int id_cliente, int id_mezzo) {
		
		this.id = id;
		this.descrizione = descrizione;
		this.data = data;
		this.km = km;
		this.id_autista = id_autista;
		this.id_cliente = id_cliente;
		this.id_mezzo = id_mezzo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public double getKm() {
		return km;
	}

	public void setKm(double km) {
		this.km = km;
	}

	public int getId_autista() {
		return id_autista;
	}

	public void setId_autista(int id_autista) {
		this.id_autista = id_autista;
	}

	public int getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(int id_cliente) {
		this.id_cliente = id_cliente;
	}

	public int getId_mezzo() {
		return id_mezzo;
	}

	public void setId_mezzo(int id_mezzo) {
		this.id_mezzo = id_mezzo;
	}

	@Override
	public String toString() {
		return "Viaggio [id=" + id + ", descrizione=" + descrizione + ", data=" + data + ", km=" + km + ", id_autista="
				+ id_autista + ", id_cliente=" + id_cliente + ", id_mezzo=" + id_mezzo + "]";
	}
	
	
	
	
}
