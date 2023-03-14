package models;

public class Mezzo {
	private int id;
	private String modello;
	private String tipo;
	private boolean stato;
	
	public Mezzo(int id, String modello, String tipo, boolean stato) {
		
		this.id = id;
		this.modello = modello;
		this.tipo = tipo;
		this.stato = stato;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "Mezzo [id=" + id + ", modello=" + modello + ", tipo=" + tipo + ", stato=" + stato + "]";
	}
	
	
	
	
}
