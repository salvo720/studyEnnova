package IT.Ennova.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.Transient;

@Entity
public class Mezzo {
	// la seguente notazione constrassegna la chiave primaria 
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) // Identity per le chiavi progressive 
	@Column(name="id",nullable=false, columnDefinition= "int")
	
	private Integer id;

	@Column(name="modello",nullable=false,length=255 , columnDefinition= "Varchar(50)")
	private String modello;
	
	@Column(name="tipo",nullable=false,length=255 , columnDefinition= "Varchar(50)")
	private String tipo;
	
	@Column(name="stato",nullable=false)
	private boolean stato;
	
	/*
	 // definire le date 
	@Temporal(TemporalType.DATE)
	private String data;
	
	// definire un campo che non esiste sul db 
	@Transient
	private int campoEsterno ;
	 */
	
	/*
	 * tabelle di mock up : sono delle tabelle che servono a semplificare 
	 * le relazioni tra le tabelle 
	 * le atre tabelle che contengono il payload , ovverro carico pagante , sono quelle che vengono caricate dopo ,
	 * 
	 * la tabella master e la prima che si a riempire prima per poter insirere dati sulla seconda tabella ad esempio , 
	 * su vendite bisogna creare prima l'utente e poi si puo registrere la vendita 
	 * 
	 * 
	 * */
	
	// sui database si usa il _ per i nome composti , e inutile suare il lowercamelCase perche sql non e case sensitive es :
	// prova_test 
	
	// se la tabella non viene trovata sul db nel modo in cui e definita spring andra in errore 
}
