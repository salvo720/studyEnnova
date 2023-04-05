package IT.Ennova.demo.Model.DbProgetto;

import javax.xml.crypto.Data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Stagione")

public class Puntata {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "numeroPuntata")
	private int numeroPuntata;
	
	@OneToOne()
	@Column(name = "idStagione")
	private int idStagione;
	
	
	
	@OneToOne()
	@Column(name = "idTipologia")
	private String idVideo;
	

}
