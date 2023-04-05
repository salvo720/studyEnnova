package IT.Ennova.demo.Model.DbProgetto;

import javax.xml.crypto.Data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Catalogo")

public class Catalogo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "titolo")
	private String titolo;
	
	@Column(name = "descrizione")
	private String descrizione;
	
	@Column(name = "locandiona")
	private String locandiona;
	
	@Column(name = "annoUscita")
	private int annoUscita;
	
	@Column(name = "dataCaricamento")
	private Data dataCaricamento;
	
	@OneToMany()
	@Column(name = "idTipologia")
	private String idTipologia;
	

}
