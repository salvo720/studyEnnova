package models;

import java.util.ArrayList;

public class Autista {
	private int id;
	private String nome;
	private String cognome;
	private String telefono;
	private String indirizzo;
	private String email;
	private String data_nascita;
	private String patente;
	private boolean stato;
	public Autista(int id, String nome, String cognome, String telefono, String indirizzo, String email,
			String data_nascita, String patente, boolean stato) {
		
		
		
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
		this.telefono = telefono;
		this.indirizzo = indirizzo;
		this.email = email;
		this.data_nascita = data_nascita;
		this.patente = patente;
		this.stato = stato;
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
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getIndirizzo() {
		return indirizzo;
	}
	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getData_nascita() {
		return data_nascita;
	}
	public void setData_nascita(String data_nascita) {
		this.data_nascita = data_nascita;
	}
	public String getPatente() {
		return patente;
	}
	public void setPatente(String patente) {
		this.patente = patente;
	}
	public boolean isStato() {
		return stato;
	}
	public void setStato(boolean stato) {
		this.stato = stato;
	}
	@Override
	public String toString() {
		return "Autista [id=" + id + ", nome=" + nome + ", cognome=" + cognome + ", telefono=" + telefono
				+ ", indirizzo=" + indirizzo + ", email=" + email + ", data_nascita=" + data_nascita + ", patente="
				+ patente + ", stato=" + stato + "]\n";
	}
	
	
	
	
}