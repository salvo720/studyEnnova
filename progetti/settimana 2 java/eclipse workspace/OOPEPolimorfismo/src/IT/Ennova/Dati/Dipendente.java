package IT.Ennova.Dati;

public class Dipendente extends Persona {
	

	private String mansione;
	private String inquadramento;
	private String tipologiaImpego;
	private String PartitaIva;

	public Dipendente(String nome, String cogome, String email, String password, int eta, String mansione,
			String inquadramento, String tipologiaImpego, String partitaIva) {
		super(nome, cogome, email, password, eta);
		this.mansione = mansione;
		this.inquadramento = inquadramento;
		this.tipologiaImpego = tipologiaImpego;
		PartitaIva = partitaIva;
	}

	public String getMansione() {
		return mansione;
	}

	public void setMansione(String mansione) {
		this.mansione = mansione;
	}

	public String getInquadramento() {
		return inquadramento;
	}

	public void setInquadramento(String inquadramento) {
		this.inquadramento = inquadramento;
	}

	public String getTipologiaImpego() {
		return tipologiaImpego;
	}

	public void setTipologiaImpego(String tipologiaImpego) {
		this.tipologiaImpego = tipologiaImpego;
	}

	public String getPartitaIva() {
		return PartitaIva;
	}

	public void setPartitaIva(String partitaIva) {
		PartitaIva = partitaIva;
	}

}
