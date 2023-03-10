package IT.Ennova.Dati;

public class Persona {
	private String nome;
	private String cogome;
	private String email;
	private String password;
	private int eta;
	
	public Persona() {
		
	}

	public Persona(String nome, String cogome, String email, String password, int eta) {
		super();
		this.nome = nome;
		this.cogome = cogome;
		this.email = email;
		this.password = password;
		this.eta = eta;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCogome() {
		return cogome;
	}

	public void setCogome(String cogome) {
		this.cogome = cogome;
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

	public int getEta() {
		return eta;
	}

	public void setEta(int eta) {
		this.eta = eta;
	}

}
