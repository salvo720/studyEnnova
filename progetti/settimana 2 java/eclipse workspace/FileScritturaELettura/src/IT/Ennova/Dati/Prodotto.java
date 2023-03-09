package IT.Ennova.Dati;

public class Prodotto {
	private int id;
	private String categoria;
	private String nome;
	private int quantita;
	private double prezzo;

	public Prodotto(int id, String categoria, String nome, int quantita, double prezzo) {
		super();
		this.id = id;
		this.categoria = categoria;
		this.nome = nome;
		this.quantita = quantita;
		this.prezzo = prezzo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getQuantita() {
		return quantita;
	}

	public void setQuantita(int quantita) {
		this.quantita = quantita;
	}

	public double getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;

	}
}
