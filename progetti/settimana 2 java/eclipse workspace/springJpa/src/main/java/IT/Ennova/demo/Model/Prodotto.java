package IT.Ennova.demo.Model;

import java.util.Calendar;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "articoli")
public class Prodotto {
	private long id;

	@Id
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Column(name = "descr", nullable = false, length = 100)
	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public float getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(float prezzo) {
		this.prezzo = prezzo;
	}

	@Temporal(TemporalType.DATE)
	public Calendar getDataRilascio() {
		return dataRilascio;
	}

	public void setDataRilascio(Calendar dataRilascio) {
		this.dataRilascio = dataRilascio;
	}

	private String descrizione;
	private float prezzo;
	private Calendar dataRilascio;

	private Fornitore fornitore;

	@ManyToOne
	@JoinColumn(name = "id_fornitore")
	public Fornitore getFornitore() {
		return fornitore;
	}

	public void setFornitore(Fornitore fornitore) {
		this.fornitore = fornitore;
	}

}
