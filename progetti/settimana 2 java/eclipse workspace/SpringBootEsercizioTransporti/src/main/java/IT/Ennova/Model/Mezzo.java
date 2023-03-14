package IT.Ennova.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "Mezzo")
public class Mezzo {
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ID;
	@Column(name = "modello")
	private String modello;
	@Column(name = "tipo")
	private String tipo;
	@Column(name = "stato")
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
