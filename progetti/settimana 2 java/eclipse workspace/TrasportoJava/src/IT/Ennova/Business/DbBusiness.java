package IT.Ennova.Business;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Hashtable;
import java.util.Scanner;

import IT.Ennova.Dati.Autista;
import IT.Ennova.Dati.Tragitto;

public class DbBusiness {

	public static void ViaggiareKm(Connection connDb) {
		int idAutista = GetAutistaId(connDb);
		if (idAutista == 0) {
			System.out.println("L'autista scelto non e stato trovato ");
		}

		GetTragittoIdByClienteId(connDb, idAutista);

//		Autista autista = new Autista();
//		Cliente cliente = new Cliente();
//		Mezzo mezzo = new Mezzo();
//		Tragitto tragitto = new Tragitto();
	}

	public static void r1(Connection connDb) {

//		Autista autista = new Autista();
//		Cliente cliente = new Cliente();
//		Mezzo mezzo = new Mezzo();
//		Tragitto tragitto = new Tragitto();
	}

	public static void r2(Connection connDb) {

//		Autista autista = new Autista();
//		Cliente cliente = new Cliente();
//		Mezzo mezzo = new Mezzo();
//		Tragitto tragitto = new Tragitto();
	}

	public static int GetAutistaId(Connection connDb) {
		String QuerySql, nome, cognome;
		int idAutista = 0;
		Hashtable<Integer, Autista> autistaHashtable = new Hashtable<Integer, Autista>();
		try {

//		crea uno stament per eseguire le query sql 
			Statement st = connDb.createStatement();
//		ResultSet e un oggetti di tipo tbellare per ricevere i dati dal Database
			QuerySql = "Select * From \"Autista\"";
//		ResultSet parte sempre da 1 
			ResultSet rs = st.executeQuery(QuerySql);
			while (rs.next()) {
				autistaHashtable.put(rs.getInt(1),
						new Autista(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4)));

			}

//		nome e cognome input id autista , poi da id autista andiamo in join con la tabella viaggi 

			Scanner ks = new Scanner(System.in);
			System.out.println("Inserisci il nome dell'autista ");
			nome = ks.nextLine();

			System.out.println("Inserisci il cognome dell'autista ");
			cognome = ks.nextLine();
			for (int i = 0; i < autistaHashtable.size(); i++) {
				if (autistaHashtable.get(i).getNome() == nome && autistaHashtable.get(i).getCognome() == cognome) {
					idAutista = i;
				}
			}

		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("Errore : " + e.getMessage());
		} finally {
			return idAutista;
		}
	}

	public static void GetTragittoIdByClienteId(Connection connDb, int autistaId) {
		String QuerySql, nome, cognome;
		int viaggi = 0, kmViaggioTotali = 0;
		Hashtable<Integer, Tragitto> tragittoHashtable = new Hashtable<Integer, Tragitto>();

		try {

//			crea uno stament per eseguire le query sql 
			Statement st = connDb.createStatement();
//			ResultSet e un oggetti di tipo tbellare per ricevere i dati dal Database
			QuerySql = "Select  \"Tragitto\".\"ID\" , \"Tragitto\\\".\"Data\" \"Tragitto\".\"Citta\" \"Tragitto\".\"KM\" \"Tragitto\".\"IDautista\" \"Tragitto\".\"IDmezzo\" \"Tragitto\".\"IDcliente\" From \"Tragitto\"";
//			ResultSet parte sempre da 1 
			ResultSet rs = st.executeQuery(QuerySql);
			while (rs.next()) {
				tragittoHashtable.put(rs.getInt(1), new Tragitto(rs.getInt(1), rs.getDate(2), rs.getString(3),
						rs.getInt(4), rs.getInt(5), rs.getInt(6), rs.getInt(7)));

			}

//			nome e cognome input id autista , poi da id autista andiamo in join con la tabella viaggi 

			Scanner ks = new Scanner(System.in);
			System.out.println("Inserisci il nome dell'autista ");
			nome = ks.nextLine();

			System.out.println("Inserisci il cognome dell'autista ");
			cognome = ks.nextLine();

			for (int i = 0; i < tragittoHashtable.size(); i++) {
				if (tragittoHashtable.get(i).getIDautista() == autistaId) {
//					acculare il numero di km e dei viaggi 
					tragittoHashtable.get(i);
					viaggi++;
					kmViaggioTotali += tragittoHashtable.get(i).getKM();
				}

			}

		} catch (

		Exception e) {
			// TODO: handle exception
			System.out.println("Errore : " + e.getMessage());
		} finally {
			System.out.println("viaggi : " + viaggi + "kmViaggioTotali : " + kmViaggioTotali);
		}
	}
}

//	sapere quanto km fa un autista 
//	numero km cliente 
//	numero viaggi utente 
