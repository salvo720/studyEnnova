package IT.Ennova.BusinessLogic;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import IT.Ennova.Model.Autista;

public class BusinessLogic {

	@Autowired
	private static JdbcTemplate jdbcTemplate;

	public static ArrayList<Autista> getAutista() {
		ArrayList<Autista> ArrayListAutista = new ArrayList<Autista>();
		int index = 0;

		try {
			
			
			Connection conn = jdbcTemplate.getDataSource().getConnection();
			String sql = "Select * From \"Autista\"";
//			String sql = "Select id,nome,cognome,telefono,indirizzo,email,data_nascita,data_assunzione,patente,stato From \"Autista\"";
			PreparedStatement statement = conn.prepareStatement(sql);

			ResultSet rs = statement.executeQuery(sql);
			while(rs.next()) {
				ArrayListAutista.add(index,new Autista(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9),rs.getBoolean(10)));
				index++;
			}
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("eccezzione generata  : " + e.getMessage() );
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