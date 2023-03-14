package IT.Ennova.demo.BusinessLogic;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import IT.Ennova.demo.Model.Autista;

public class BusinessLogic {

	public static ArrayList<Autista> getAutista() {
		ArrayList<Autista> ArrayListAutista = new ArrayList<Autista>();
		int index = 0;
		String connString, user, password, sql;
		connString = "jdbc:postgresql://localhost:5432/AgenziaTrasporti";
		user = "postgres";
		password = "root";

		try {
			Connection connDb = DriverManager.getConnection(connString, user, password);
			sql = "Select id,nome,cognome,telefono,indirizzo,email,data_nascita,data_assunzione,patente,stato From \"autista\"";
			Statement st = connDb.createStatement();
			ResultSet rs = st.executeQuery(sql);

			while (rs.next()) {
				ArrayListAutista.add(index,
						new Autista(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
								rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getBoolean(10)));
				index++;
			}
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("eccezzione generata  : " + e.getMessage());
			// TODO: handle exception
			e.printStackTrace();
		}

		return ArrayListAutista;
	}

}

// 1) gestione autisti , con visualizza elenco , inserimento e delete 
// 2) visualizzare dati dei clienti 
// 3) un inserimeto dei dati tramite le richieste rest che usano i protocolli http e https 
// 4) realizzare le view e visualizzare i dati 
// 5) dentro il package model creare tante classi dati quante sono le tabelle con i propi getter e setter classi 
// fagiolo ovvero bean , e una classe normalissima dove ci sono i campi privati con costruttore privo di paramterti e deve implementare le interfacce di serializzazione 
// aggiungere la tabella utenti con nome e password 