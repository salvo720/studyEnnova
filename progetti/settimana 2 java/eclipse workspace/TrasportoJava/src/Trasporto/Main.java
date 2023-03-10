package Trasporto;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

import IT.Ennova.Business.DbBusiness;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		connDb();
	}

	public static void connDb() {
		String connString, user, password, porta, host, DbName, QuerySql;
		Connection connDb = null;
		host = "localhost";
		DbName = "Trasporto";
		porta = ":5432";
		user = "postgres";
		password = "root";
		connString = "jdbc:postgresql://" + host + porta + "/" + DbName;

		try {

			// crea la connessione al Db
			connDb = DriverManager.getConnection(connString, user, password);

//			crea uno stament per eseguire le query sql 
			Statement st = connDb.createStatement();
//			ResultSet e un oggetti di tipo tbellare per ricevere i dati dal Database
			QuerySql = "Select \"Cliente\".\"Nome\" , \"Cliente\".\"Cognome\" From \"Cliente\"";
			ResultSet rs = st.executeQuery(QuerySql);

			System.out.println("connesso");

			Scanner ks = new Scanner(System.in);
			String scelta;
			System.out.println(" premi 0 per ternimare il programma");
			System.out.println(" premi 1 per visualizare quanti km fa un cliente e quanti viaggi ha fatto  ");
			System.out.println(" premi 2 per stampare tutti i recordo del db ");
			scelta = ks.nextLine();
			while (Integer.parseInt(scelta) != 0) {

				switch (scelta) {
				case "0":
					System.out.println(" programma terminato ");
					ks.close();
					break;
				case "1":
					DbBusiness.ViaggiareKm(connDb);
					break;
				case "2":
//					DbBusiness.StampaClienti(connDb);
					break;
				case "3":
//					DbBusiness.StampaClientiConArrayList(connDb);
					break;
				default:
					System.out.println(" Scelta non valida ");
					break;
				}

				System.out.println(" premi 0 per ternimare il programma");
				System.out.println(" premi 1 per aggiungere un record al database");
				System.out.println(" premi 2 per stampare tutti i recordo del db ");
				scelta = ks.nextLine();
			}

//			rs.next() fa avanzare il dati alla tupla o record  successiva ritorna un boolean se punta su un rigo esistente
//			questo ci consente di usare un loop dentro un while per estrarre tutti i record 
//			successivamente per estrarre i dati ci basta usare il tipo preceduto da get e il campo , ad esemipo 
//			getString(rs.String(2)) 
//			i campi partono da 1 

			if (rs.next()) {
//				System.out.println(rs.getString(2));
				System.out.println("nome : " + rs.getString(1) + " cognome : " + rs.getString(2));
			}

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

	}

}
