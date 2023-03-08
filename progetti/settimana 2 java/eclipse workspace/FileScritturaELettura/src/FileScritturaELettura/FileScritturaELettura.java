package FileScritturaELettura;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

import IT.Ennova.Business.FileStorage;
import IT.Ennova.Dati.Dati;

public class FileScritturaELettura {

//	tutte le volte che ci troviamo a gestire un input utente o un integrazione con un sistema esterno al nostro programma applichiamo il blocco trycatch
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String NomeFile, scelta;

		Scanner ks = new Scanner(System.in);
		System.out.println("inserisci il nome del file");
		NomeFile = ks.nextLine();

		String path = "C:\\studyEnnova\\progetti\\settimana 2 java\\eclipse workspace\\FileScritturaELettura\\src\" + NomeFile + ".txt";

		File file = new File(path);

		System.out.println(" premi 0 per ternimare il programma ");
		System.out.println(" premi 1 per creare il file ");
		System.out.println(" premi 2 per scrivere nel  file ");
		System.out.println(" premi 3 per leggere nel  file ");
		System.out.println(" premi 4 per spezza la stringa e stampare i campi ");
		System.out.println(" premi 5 per usare la classe business logic  ");
		System.out.println(" premi 6 per usare gli oggetti   ");
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
			default:
				System.out.println(" Scelta non valida ");
				break;
			}

			System.out.println(" premi 0 per ternimare il programma ");
			System.out.println(" premi 1 per creare il file ");
			System.out.println(" premi 2 per scrivere nel  file ");
			System.out.println(" premi 3 per leggere nel  file ");
			System.out.println(" premi 4 per spezza la stringa e stampare i campi ");
			System.out.println(" premi 5 per usare la classe business logic  ");
			System.out.println(" premi 6 per usare gli oggetti   ");
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
		Dati d = new Dati();
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

//	file di classe 
//	i package sono simili ale cartelle
}
