package FileScritturaELettura;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

import IT.Ennova.Business.DbBusiness;
import IT.Ennova.Business.FileStorage;
import IT.Ennova.Dati.Cliente;
import IT.Ennova.Dati.Dati;
import IT.Ennova.Dati.Indirizzo;

public class FileScritturaELettura {

//	tutte le volte che ci troviamo a gestire un input utente o un integrazione con un sistema esterno al nostro programma applichiamo il blocco trycatch
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String NomeFile, scelta;

		Scanner ks = new Scanner(System.in);
		System.out.println("inserisci il nome del file");
		NomeFile = ks.nextLine();

		String path = "C:\\studyEnnova\\progetti\\settimana 2 java\\eclipse workspace\\FileScritturaELettura\\src\\ "
				+ NomeFile + ".txt ";

		File file = new File(path);

		System.out.println(" premi 0 per ternimare il programma");
		System.out.println(" premi 1 per creare il file");
		System.out.println(" premi 2 per scrivere nel file");
		System.out.println(" premi 3 per leggere nel file");
		System.out.println(" premi 4 per spezza la stringa e stampare i campi");
		System.out.println(" premi 5 per usare la classe business logic");
		System.out.println(" premi 6 per usare gli oggetti");
		System.out.println(" premi 7 per creare uno scontrino");
		System.out.println(" premi 8 per connetteri al database");
		scelta = ks.nextLine();
		while (Integer.parseInt(scelta) != 0) {

			switch (scelta) {
			case "0":
				System.out.println(" programma terminato ");
				ks.close();
				break;
			case "1":
				newFile(ks, file);
				break;
			case "2":
				ScritturaFile(ks, file);
				break;
			case "3":
				letturaFile(file);
				break;
			case "4":
				spezzaStringa(ks, file);
				break;
			case "5":
				UsoBusinessLogic(file);
				break;
			case "6":
				UsoOggetti(ks);
				break;
			case "7":
				creaScontrino();
				break;
			case "8":
				connDb();
				break;
			
			default:
				System.out.println(" Scelta non valida ");
				break;
			}

			System.out.println(" premi 0 per ternimare il programma");
			System.out.println(" premi 1 per creare il file");
			System.out.println(" premi 2 per scrivere nel file");
			System.out.println(" premi 3 per leggere nel file");
			System.out.println(" premi 4 per spezza la stringa e stampare i campi");
			System.out.println(" premi 5 per usare la classe business logic");
			System.out.println(" premi 6 per usare gli oggetti");
			System.out.println(" premi 7 per creare uno scontrino");
			System.out.println(" premi 8 per connetteri al database");
			scelta = ks.nextLine();
		}

	}

	public static void newFile(Scanner ks, File file) {
		String path = file.getAbsolutePath();
		try {
			if (file.exists()) {
				System.out.println("Il file " + path + " esiste");
			} else if (file.createNewFile()) {
				System.out.println("Il file " + path + " è stato creato");
			} else {
				System.out.println("Il file " + path + " non può essere creato");
			}

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	public static void ScritturaFile(Scanner ks, File file) {
		String testoInput;
		System.out.println("inserisci la stringa da memorizzare");
		testoInput = ks.nextLine();

		try {
			FileWriter fw = new FileWriter(file, true); // the true will append the new data
			fw.write(testoInput);// appends the string to the file
			fw.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static String letturaFile(File file) {
		String FileContent = "", path;
		path = file.getAbsolutePath();
		try {
			// Passing the path to the file as a parameter
			FileReader fr = new FileReader(path);

			// Declaring loop variable
			int i;
			// Holds true till there is nothing to read
			while ((i = fr.read()) != -1) {

				// Print all the content of a file
				FileContent += (char) i;
			}
			fr.close();
			System.out.print("FileContent :" + FileContent);
//			aggiungo una linea di spazio 
			System.out.println();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return FileContent;
	}

	public static void spezzaStringa(Scanner ks, File file) {
		// stringa tipo ugo,rossi,numtelefono , che contiene tutto il record estrarre il
		// nome , cognome estampare sullo schermo ad esempio nome : ugo , cognome ,
		// rossi
		// da un array di stringhe opzioanle

		String fileContent;

//		String record = "ugo,rossi,pisa,3458232";
		ScritturaFile(ks, file);
		fileContent = letturaFile(file);

		String[] ArrayRecord = fileContent.split(",");

		System.out.println(" nome : " + ArrayRecord[0] + ", cognome : " + ArrayRecord[1] + ", citta : " + ArrayRecord[2]
				+ ", telefono : " + ArrayRecord[3]);
	}

	public static void UsoBusinessLogic(File file) {
		FileStorage fileStorage = new FileStorage();
		fileStorage.readFile(file);
	}

	public static void UsoOggetti(Scanner ks) {
		Dati d = new Dati("Ugo", "Rossi", "Pisa", "34523424", true);
		try {
			String nome, cognome, citta, telefono;
			System.out.println(" inserisci il nome ");
			nome = ks.nextLine();
			while (nome.length() <= 2) {
				System.out.println(" inserisci il nome ");
				nome = ks.nextLine();
				d.setNome(nome);
			}
			System.out.println(" inserisci il cognome ");
			cognome = ks.nextLine();
			d.setCognome(cognome);

			System.out.println(" inserisci citta ");
			citta = ks.nextLine();
			d.setCitta(citta);

			System.out.println(" inserisci il telefono ");
			telefono = ks.nextLine();
			d.setTelefono(telefono);

		} catch (Exception e) {
			System.out.println("error message" + e.getMessage());
			// TODO: handle exception
		}

	}

	public static void creaScontrino() {
		Indirizzo indirizzo = new Indirizzo(0, "via", 123, 1234, "citta");
		Cliente cliente = new Cliente(0, "nome", "cognome", "email", "password", indirizzo);
	}

	public static void connDb() {
		String connString, user, password, porta, host, DbName, QuerySql;
		Connection connDb = null;
		host = "localhost";
		DbName = "DbForJava";
		porta = ":5432";
		user = "postgres";
		password = "root";
		connString = "jdbc:postgresql://" + host + porta + "/" + DbName;
		
//		connString = "jdbc:postgresql://localhost:5432/DbForJava";

		try {

			// crea la connessione al Db
			connDb = DriverManager.getConnection(connString, user, password);

//			crea uno stament per eseguire le query sql 
			Statement st = connDb.createStatement();
//			ResultSet e un oggetti di tipo tbellare per ricevere i dati dal Database
			QuerySql = "Select nome , cognome From \"Cliente\"";
			ResultSet rs = st.executeQuery(QuerySql);

			System.out.println("connesso");

			Scanner ks = new Scanner(System.in);
			String scelta;
			System.out.println(" premi 0 per ternimare il programma");
			System.out.println(" premi 1 per aggiungere un record al database");
			System.out.println(" premi 2 per stampare tutti i recordo del db ");
			System.out.println(" premi 3 per stampare tutti i recordo del db con arrayList e  ");
			scelta = ks.nextLine();
			while (Integer.parseInt(scelta) != 0) {

				switch (scelta) {
				case "0":
					System.out.println(" programma terminato ");
					ks.close();
					break;
				case "1":
					DbBusiness.Aggiungi(connDb);
					break;
				case "2":
					DbBusiness.StampaClienti(connDb);
					break;
				case "3":
					DbBusiness.StampaClientiConArrayList(connDb);
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

//		DbBusiness dbBusiness = new DbBusiness();

	}

//	i package : sono simili ale cartelle
//	classe : e il progetto/schema di un oggetto 
//	oggetto : e l'instanza di una classe 
//	classe astratta vs interfaccia quali sono le differenze 
//	incapsulamento : usare i getter e i setter fanno parte degli standard  programmazzione ad oggetti per rispettare il principio dell'incapsulamento ,
//	il vantaggio e quello di poter rimuovere un getter o un setter , andando a rimuovere l'operazione di lettura e di scrittura da un campo specifico  
// gli indici velocizzano la ricerca ma rallentano l'inserimento e la modifica perche gli indici devono essere ricreati 

// db nosql distribuito: cassandra
//	data ingestion iot : influx 

//	progettazzione del software    

//	regole di normalizzazione per progettazione data

//	database transazionali 
//	nei datawarehouse abbiamo dei dati denormalizzati , ad esempio quando dobbiamo fare delle analisi , etf : extract transfort and load 

//	SSIS : sql server integration services , svolge le funzioni di etl fa parte solo delle standard edition con 6 mesi gratuiti 
//	nel database ci sono le tabelle pvot  per le tabelle denormalizzate 

//	databse per eccomrce registrando le vendite degli articoli , individuare le entita 
}

// ugo rossi compra 4 penne e 2 quaderni e poi calcolare il totale da pagare 

//query db : 

/*
 *
 *
 * select * from public."Cliente" as c inner join public."indirizzo" as i on
 * i."id" = c."indirizzoId" inner join public."ScontrinoTesta" as st on
 * st."clienteId" = c."id" inner join public."Prodotti" as p on
 * p."id"=st."clienteId"
 * 
 * 
 * 2 )
 * 
 * select * from public."ScontrinoTesta" as st join public."Vendite" as v on
 * st."id"=v."ScontrinoTestaid" join public."Prodotti" as p on
 * p."id"=v."ScontrinoTestaid"
 * 
 */
