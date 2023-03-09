package IT.Ennova.Dati;

public class Cliente {

	private int id;
	private String nome;
	private String cognome;
	private String email;
	private String password;
	private int indirizzoId;

	public Cliente(int id, String nome, String cognome, String email, String password, Indirizzo indirizzoId) {
		super();
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.password = password;
		this.indirizzoId = indirizzoId.getId();
	}
	
	public Cliente( String nome, String cognome, String email, String password) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.password = password;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getIndirizzoId() {
		return indirizzoId;
	}

	public void setIndirizzoId(int indirizzoId) {
		this.indirizzoId = indirizzoId;
	}

	
//	struttura master detail 
}
