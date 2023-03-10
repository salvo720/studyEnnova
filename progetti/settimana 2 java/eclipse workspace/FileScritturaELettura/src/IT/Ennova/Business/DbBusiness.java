package IT.Ennova.Business;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.Scanner;

import IT.Ennova.Dati.Cliente;

public class DbBusiness {

	public static void Aggiungi(Connection connDb) {

		Scanner ks = new Scanner(System.in);
		String nome, cognome, email, password;

		String values;

		System.out.println("Inserisci il nome ");
		nome = ks.next();
		nome = "'" + nome + "'";

		System.out.println("Inserisci il cognome ");
		cognome = ks.next();
		cognome = "'" + cognome + "'";

		System.out.println("Inserisci l'email ");
		email = ks.next();
		email = "'" + email + "'";

		System.out.println("Inserisci la password");
		password = ks.next();
		password = "'" + password + "'";

		Cliente cliente = new Cliente(nome, cognome, email, password);
		values = cliente.getNome() + " ," + cliente.getCognome() + "," + cliente.getEmail() + ","
				+ cliente.getPassword();

		try {

			System.out.println("connesso");
			String Query;
			Query = "insert into public.\"Cliente\"(\"nome\",\"cognome\",\"email\",\"password\") Values (" + values
					+ ")";
			Statement st = connDb.createStatement();

			st.executeUpdate(Query);
			System.out.println("nuovo cinete creato ");
		} catch (SQLException e) {
			// TODO: handle exception
			System.out.println("erroe :" + e.getMessage());
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("erroe :" + e.getMessage());
		}

	}

	public static void StampaClienti(Connection connDb) {

		Cliente[] clienteArray = new Cliente[100];

		try {

			System.out.println("connesso");
			String Query;
			Query = "Select nome , cognome From \"Cliente\"";
			Statement st = connDb.createStatement();
			ResultSet rs = st.executeQuery(Query);

			int index = 0;
			while (rs.next() && index < 100) {
//				System.out.println(rs.getString(1) + " " + rs.getString(2));
				clienteArray[index] = new Cliente(rs.getString(1), rs.getString(2));

				System.out.println(
						"nome : " + clienteArray[index].getNome() + " cognome : " + clienteArray[index].getCognome());
				index++;
			}

			System.out.println("nuovo cinete creato ");
		} catch (SQLException e) {
			// TODO: handle exception
			System.out.println("erroe :" + e.getMessage());
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("erroe :" + e.getMessage());
		}

	}

	public static void StampaClientiConArrayList(Connection connDb) {

		Cliente[] clienteArray = new Cliente[100];

		ArrayList<Cliente> arrayListCliente = new ArrayList<Cliente>();
		Hashtable<Integer, Cliente> hashtable = new Hashtable<Integer, Cliente>();

		try {

			System.out.println("connesso");
			String Query;
			Query = "Select nome , cognome , id  From \"Cliente\"";
			Statement st = connDb.createStatement();
			ResultSet rs = st.executeQuery(Query);

			int index = 0;
			while (rs.next() && index < 100) {
//				System.out.println(rs.getString(1) + " " + rs.getString(2));
//				Mapping dati 
				arrayListCliente.add(new Cliente(rs.getString(1), rs.getString(2)));
				clienteArray[index] = new Cliente(rs.getString(1), rs.getString(2));
				hashtable.put(Integer.parseInt(rs.getString(3)), new Cliente(rs.getString(2), rs.getString(1)));

				System.out.println(
						"nome : " + clienteArray[index].getNome() + " cognome : " + clienteArray[index].getCognome());
				System.out.println("clienteArray :" + clienteArray);
				System.out.println("hashtable :" + hashtable.get(Integer.parseInt(rs.getString(3))).getNome() + hashtable.get(rs.getString(3)).getCognome());
				index++;
			}
			
			System.out.println("hashtable");
			System.out.println("arrayListCliente " + arrayListCliente);
		} catch (SQLException e) {
			// TODO: handle exception
			System.out.println("erroe :" + e.getMessage());
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("erroe :" + e.getMessage());
		}

	}

}

// agenzia di transporti con diversi mezzi ed autisti , clienti che richiedono il servizio di transporto 
// e il titolare deve poter registre l'attivita degli autisti che fanno dei viaggi specifici per un utente , 
// il viaggio e di una certa distanza di kl , e dobbiamo spare quanti km ha fatto ogni autista , i numeri di km fatti per
//ogni cliente , il numero di viaggi complessivi tutte le registrazioni che effuttiamo devono essere controllate per evitare errori 
//abbiamo 2 tipi di mezzi camion e furgoni , prezzi con furgone 1 euro al kilometro e 5 per i camion 
