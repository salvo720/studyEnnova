package IT.Ennova.demo.Model.DbProgetto;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Video")
public class Video {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="titolo")
	private String titolo;
	
	@Column(name="durata")
	private String durata;
	
	@OneToOne()
	@Column(name="idCategoria")
	private int idCategoria;
	
	
	
	

}
