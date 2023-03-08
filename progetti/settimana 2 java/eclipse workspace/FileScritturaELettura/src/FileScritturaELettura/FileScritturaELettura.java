package FileScritturaELettura;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileScritturaELettura {

//	tutte le volte che ci troviamo a gestire un input utente o un integrazione con un sistema esterno al nostro programma applichiamo il blocco trycatch
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String testoInput, NomeFile;
		String scelta;

		Scanner ks = new Scanner(System.in);
		System.out.println("inserisci il nome del file da memorizzare");
		NomeFile = ks.nextLine();

		String path = "C:\\eclipse workspace\\FileScritturaELettura\\src\\" + NomeFile + ".txt";

		File file = new File(path);

		System.out.println(" premi 0 per ternimare il programma ");
		System.out.println(" premi 1 per creare il file ");
		System.out.println(" premi 2 per scrivere nel  file ");
		System.out.println(" premi 3 per leggere nel  file ");
		System.out.println(" premi 4 per spezza la stringa e stampare i campi ");
		scelta = ks.nextLine();
		while (scelta != "0") {

			switch (scelta) {
			case "1":
				newFile(ks, file, path);
				break;
			case "2":
				ScritturaFile(ks, file);
				break;
			case "3":
				letturaFile(file, path);
				break;
			case "4":
				spezzaStringa();
				break;
			default:
				System.out.println(" Scelta non valida ");
				break;
			}

			System.out.println(" premi 1 per creare il file ");
			System.out.println(" premi 2 per scrivere nel  file ");
			System.out.println(" premi 3 per leggere nel  file ");
			System.out.println(" premi 4 per spezza la stringa e stampare i campi ");
			scelta = ks.nextLine();
		}

	}

	public static void newFile(Scanner ks, File file, String path) {

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

		String testoInputConN = testoInput + " \n";

		try {
			FileWriter fw = new FileWriter(file, true); // the true will append the new data
			fw.write(testoInput);// appends the string to the file
			fw.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	// Main driver method
	public static void letturaFile(File File, String path) {
		try {
			// Passing the path to the file as a parameter
			FileReader fr = new FileReader(path);

			// Declaring loop variable
			int i;
			// Holds true till there is nothing to read
			while ((i = fr.read()) != -1)

				// Print all the content of a file
				System.out.print((char) i);
//			aggiungo una linea di spazio 
				System.out.println();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void spezzaStringa() {
		// stringa tipo  ugo,rossi,numtelefono , che contiene tutto il record estrarre il nome , cognome estampare sullo schermo ad esempio nome : ugo , cognome , rossi
		// da un array di stringhe opzioanle 

		String record = "ugo,rossi,pisa,3458232";
		String[] ArrayRecord = record.split(",");
		
		System.out.println(" nome : " + ArrayRecord[0] + ", cognome : " + ArrayRecord[1] + ", citta : " + ArrayRecord[2] +  ", telefono : " + ArrayRecord[3]  );
	}

}

