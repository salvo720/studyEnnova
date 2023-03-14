package models;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;

public class Business {
	private ArrayList<Autista> a1;
	
	public Business() {}
	
	//---------AUTISTA--------------------------------------------------------------
	public ArrayList<Autista> getAutisti(){
		String url="jdbc:postgresql://localhost:5432/AgenziaTrasporti";
		String user="postgres";
		String password="a";
		
		Connection con=null;//connessione al server
		
		Statement st=null; //consente di passare il comando al database
		
		try {
			con=DriverManager.getConnection(url,user,password);
			st= con.createStatement();
		

		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Errore 1: "+e.getMessage());
		}
		
		
		ArrayList<Autista> a1=new ArrayList();
		
		ResultSet rs=null;
		try {
			rs = st.executeQuery("SELECT * FROM autista ");
			
			while(rs.next()) {
				a1.add(new Autista(Integer.parseInt(rs.getString(1)),rs.getString(2),rs.getString(3),rs.getString(4),
						rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),Boolean.parseBoolean(rs.getString(10))));
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Errore 2: "+e.getMessage());
		}
		
		try {rs.close();}catch(Exception e){System.out.println("Errore 3: "+e.getMessage());}
		try {st.close();}catch(Exception e){System.out.println("Errore 4: "+e.getMessage());}
		try {con.close();}catch(Exception e){System.out.println("Errore 5: "+e.getMessage());}

		
		this.a1=a1;
		return a1;
		
		
	}
	

	public Autista getViaggi(String id){
		
		for(Autista str:a1) {
			  if(str.getId()==Integer.parseInt(id)) {
				  return str;
			  }
			}
		
		return null;
	}
	
	//---------CLIENTI------------------------------------------------------------
	public ArrayList<Cliente> getClienti(){
		
		String url="jdbc:postgresql://localhost:5432/AgenziaTrasporti";
		String user="postgres";
		String password="a";
		
		Connection con=null;//connessione al server
		
		Statement st=null; //consente di passare il comando al database
		
		try {
			con=DriverManager.getConnection(url,user,password);
			st= con.createStatement();
		

		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Errore 1: "+e.getMessage());
		}
		
		
		ArrayList<Cliente> a1=new ArrayList();
		
		ResultSet rs=null;
		try {
			rs = st.executeQuery("SELECT * FROM cliente ");
			
			while(rs.next()) {
				a1.add(new Cliente(Integer.parseInt(rs.getString(1)),rs.getString(2),rs.getString(3),rs.getString(4),
						rs.getString(5),rs.getString(6)));
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Errore 2: "+e.getMessage());
		}
		
		try {rs.close();}catch(Exception e){System.out.println("Errore 3: "+e.getMessage());}
		try {st.close();}catch(Exception e){System.out.println("Errore 4: "+e.getMessage());}
		try {con.close();}catch(Exception e){System.out.println("Errore 5: "+e.getMessage());}

		return a1;
		
		
	}
	
	public ArrayList<Mezzo> getMezzi(){
		
		String url="jdbc:postgresql://localhost:5432/AgenziaTrasporti";
		String user="postgres";
		String password="a";
		
		Connection con=null;//connessione al server
		
		Statement st=null; //consente di passare il comando al database
		
		try {
			con=DriverManager.getConnection(url,user,password);
			st= con.createStatement();
		

		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Errore 1: "+e.getMessage());
		}
		
		
		ArrayList<Mezzo> a1=new ArrayList();
		
		ResultSet rs=null;
		try {
			rs = st.executeQuery("SELECT * FROM mezzo ");
			
			while(rs.next()) {
				a1.add(new Mezzo(Integer.parseInt(rs.getString(1)),rs.getString(2),rs.getString(3),Boolean.parseBoolean(rs.getString(4))));
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Errore 2: "+e.getMessage());
		}
		
		try {rs.close();}catch(Exception e){System.out.println("Errore 3: "+e.getMessage());}
		try {st.close();}catch(Exception e){System.out.println("Errore 4: "+e.getMessage());}
		try {con.close();}catch(Exception e){System.out.println("Errore 5: "+e.getMessage());}

		return a1;
		
		
	}

	public ArrayList<Viaggio> getViaggi(){
	
	String url="jdbc:postgresql://localhost:5432/AgenziaTrasporti";
	String user="postgres";
	String password="a";
	
	Connection con=null;//connessione al server
	
	Statement st=null; //consente di passare il comando al database
	
	try {
		con=DriverManager.getConnection(url,user,password);
		st= con.createStatement();
	

	} catch (Exception e) {
		// TODO Auto-generated catch block
		System.out.println("Errore 1: "+e.getMessage());
	}
	
	
	ArrayList<Viaggio> a1=new ArrayList();
	
	ResultSet rs=null;
	try {
		rs = st.executeQuery("SELECT * FROM viaggio ");
		
		while(rs.next()) {
			a1.add(new Viaggio(Integer.parseInt(rs.getString(1)),rs.getString(2),rs.getString(3),
					Double.parseDouble(rs.getString(4)) , Integer.parseInt(rs.getString(5)) , 
					Integer.parseInt(rs.getString(6)),Integer.parseInt(rs.getString(7)) ));
		}
	} catch (Exception e) {
		// TODO Auto-generated catch block
		System.out.println("Errore 2: "+e.getMessage());
	}
	
	try {rs.close();}catch(Exception e){System.out.println("Errore 3: "+e.getMessage());}
	try {st.close();}catch(Exception e){System.out.println("Errore 4: "+e.getMessage());}
	try {con.close();}catch(Exception e){System.out.println("Errore 5: "+e.getMessage());}

	return a1;
	
	
}
		

}
