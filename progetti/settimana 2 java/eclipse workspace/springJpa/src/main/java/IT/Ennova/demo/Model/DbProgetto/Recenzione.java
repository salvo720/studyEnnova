package IT.Ennova.demo.Model.DbProgetto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Recenzione")
public class Recenzione {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="id")
		private int id;
		
		@Column(name="valore")
		private int valore;
		
		@Column(name="recenzione")
		private String recenzione;
		
		@ManyToOne()
		@Column(name="id_categoria")
		private int id_categoria;
		
		@ManyToOne()
		@Column(name="id_utente")
		private int id_utente;

	}


