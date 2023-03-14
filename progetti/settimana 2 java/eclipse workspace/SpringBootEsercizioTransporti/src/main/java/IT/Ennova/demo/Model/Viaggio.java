package IT.Ennova.demo.Model;


public class Viaggio {
	
	private int ID;
	
	private String descrizione;

	private String data;
	
	private double km;
	

	private int id_mezzo;
	
	
	private int id_cliente;

	private int id_autista;

	public Viaggio(int iD, String descrizione, String data, double km, int id_mezzo, int id_cliente, int id_autista) {
		super();
		ID = iD;
		this.descrizione = descrizione;
		this.data = data;
		this.km = km;
		this.id_mezzo = id_mezzo;
		this.id_cliente = id_cliente;
		this.id_autista = id_autista;
	}

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
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

	public int getId_mezzo() {
		return id_mezzo;
	}

	public void setId_mezzo(int id_mezzo) {
		this.id_mezzo = id_mezzo;
	}

	public int getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(int id_cliente) {
		this.id_cliente = id_cliente;
	}

	public int getId_autista() {
		return id_autista;
	}

	public void setId_autista(int id_autista) {
		this.id_autista = id_autista;
	}
	
	
}
