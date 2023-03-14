package IT.Ennova.demo.Model;

public class Mezzo {
	
	private int ID;
	
	private String modello;
	
	private String tipo;
	
	private boolean stato;

	public Mezzo(int iD, String modello, String tipo, boolean stato) {
		super();
		ID = iD;
		this.modello = modello;
		this.tipo = tipo;
		this.stato = stato;
	}

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getModello() {
		return modello;
	}

	public void setModello(String modello) {
		this.modello = modello;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public boolean isStato() {
		return stato;
	}

	public void setStato(boolean stato) {
		this.stato = stato;
	}

}
