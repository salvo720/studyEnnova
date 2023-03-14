package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;



public class Business {
	private String url="jdbc:postgresql://localhost:5432/AgenziaTrasporti";
	private	String user="postgres";
	private String password="a";
	
	private Connection con;//connessione al server
	
	private Statement st; //consente di passare il comando al database
	
	public Business() {
		try {
			con=DriverManager.getConnection(url,user,password);
			st= con.createStatement();
		

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	public ArrayList<String> getClienti(){
		
		ArrayList cl=new ArrayList();
		
		ResultSet rs;
		try {
			rs = st.executeQuery("SELECT nome FROM cliente ");
			
			while(rs.next()) {
				cl.add(rs.getString("nome"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return cl;
	}
	
	
public ArrayList<String> getViaggi(String id){
		
		ArrayList v=new ArrayList();
		
		ResultSet rs;
		try {
			rs = st.executeQuery("SELECT c.nome,c.cognome,v.descrizione,v.data,v.km FROM viaggio AS v\r\n"
					+ "JOIN cliente AS c ON v.id_cliente=c.id\r\n"
					+ "WHERE c.id="+id);
			
			while(rs.next()) {
				String nome= rs.getString("nome");
				String cognome=rs.getString("cognome");
				String descrizione=rs.getString("descrizione");
				String data=rs.getString("data");
				String km=rs.getString("km");
				String s=nome+" "+cognome+" "+descrizione+" "+data+" "+km;
				v.add(s);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return v;
	}

}
