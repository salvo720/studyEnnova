package IT.Ennova.Dati;

public class ScontrinoTesta {
	private int Id;
	private int clienteId;

	public ScontrinoTesta(int id, Cliente clienteId) {
		super();
		Id = id;
		this.clienteId = clienteId.getId();
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public int getClienteId() {
		return clienteId;
	}

	public void setClienteId(int clienteId) {
		this.clienteId = clienteId;
	}

}
