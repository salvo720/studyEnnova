package IT.Ennova.Dati;

public class Vendite {
	private int id;
	private int prodotti;
	private int cliente;
	private int quantita;
	public Vendite(int id, Prodotto prodotti, Cliente cliente, int quantita) {
		super();
		this.id = id;
		this.prodotti = prodotti.getId();
		this.cliente = cliente.getId();
		this.quantita = quantita;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getProdotti() {
		return prodotti;
	}
	public void setProdotti(int prodotti) {
		this.prodotti = prodotti;
	}
	public int getCliente() {
		return cliente;
	}
	public void setCliente(int cliente) {
		this.cliente = cliente;
	}
	public int getQuantita() {
		return quantita;
	}
	public void setQuantita(int quantita) {
		this.quantita = quantita;
	}
}