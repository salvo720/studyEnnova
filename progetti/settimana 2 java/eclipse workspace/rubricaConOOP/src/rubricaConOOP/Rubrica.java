package rubricaConOOP;

import java.util.Scanner;

public class Rubrica {

//	stampare il menu x per uscire 

//	con switch case 

	public static int numeroElementiInseriti = 0;

//	nome cognome citta telefono
	static String[][] rubrica = new String[100][4];

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// ArrayMultidimensionale

		System.out.println(" premi x per terminare il programma ");
		System.out.println(" premi i per effettaure l'inserimento ");
		System.out.println(" premi s per effettaure la stampa ");
		System.out.println(" premi v per effettaure la verifica ");
		System.out.println(" premi se per effettaure la stampa Elegante ");

		String ScannerSceltaValue;
		Scanner ScannerScelta = new Scanner(System.in);
		ScannerSceltaValue = ScannerScelta.nextLine();

		while (!ScannerSceltaValue.equals("x")) {

			switch (ScannerSceltaValue) {
			case "i":
				inserismentoRecord();
				break;
			case "s":
				stampaRubrica();
				break;
			case "x":
				System.out.println("programma terminato");
				break;

			case "se":
				stampaElegante();
				break;

			default:
				System.out.println(" la scelta effettuata non e valida a ");
				break;
			}

			System.out.println(" premi x per terminare il programma ");
			System.out.println(" premi i per effettaure l'inserimento ");
			System.out.println(" premi s per effettaure la stampa ");
			System.out.println(" premi v per effettaure la verifica ");
			System.out.println(" premi se per effettaure la stampa Elegante ");
			ScannerSceltaValue = ScannerScelta.nextLine();

		}

	}

	/**
	 * inserisce un record
	 */

	public static void inserismentoRecord() {
		Scanner ks = new Scanner(System.in);
		String nome;
		String cognome;
		String citta;
		String telefono;

		System.out.println("Inserisci il suo nome ");
		nome = ks.nextLine();

		System.out.println("Inserisci il suo cognome ");
		cognome = ks.nextLine();

		System.out.println("Inserisci la sua citta ");
		citta = ks.nextLine();

		System.out.println("Inserisci il suo numero ");
		telefono = ks.nextLine();

		while (!nome.equalsIgnoreCase("fine")) {
			if (numeroElementiInseriti != 0) {

				System.out.println("Inserisci il suo nome ");
				nome = ks.nextLine();

				System.out.println("Inserisci il suo cognome ");
				cognome = ks.nextLine();

				System.out.println("Inserisci la sua citta ");
				citta = ks.nextLine();

				System.out.println("Inserisci il suo numero ");
				telefono = ks.nextLine();
			}

			if (!nome.equals("fine")) {
				rubrica[numeroElementiInseriti][0] = nome;
				rubrica[numeroElementiInseriti][1] = cognome;
				rubrica[numeroElementiInseriti][2] = citta;
				rubrica[numeroElementiInseriti][3] = telefono;
				numeroElementiInseriti = numeroElementiInseriti + 1;
			}

		}

	}

	/**
	 * stampa tutti i record presenti
	 */

	public static void stampaRubrica() {
		for (int i = 0; i < rubrica.length; i++) {
			if (rubrica[i][0] != null) {
				System.out.println(" nome  " + rubrica[i][0] + " cognome : " + rubrica[i][1] + " citta : "
						+ rubrica[i][2] + " numeroTelefonico : " + rubrica[i][3]);
			}
		}
	}

	public static void inserimentoMio() {
		String StringScannerValue, StrNumScannerValue;
		System.out.println("Inserisci il nome ");
		Scanner StringScanner = new Scanner(System.in);
		StringScannerValue = StringScanner.nextLine();

		Scanner StrNumScanner = new Scanner(System.in);
		System.out.println("Inserisci il numeroTelefonico ");

		StrNumScannerValue = StringScanner.nextLine();

		String[][] rubrica = new String[10][2];

		for (int i = 0; i < rubrica.length; i++) {
			for (int y = 0; y < rubrica[i].length; y++) {
				if (y == 0) {

					rubrica[i][y] = StringScannerValue;
				} else {
					rubrica[i][y] = StrNumScannerValue;
				}

				System.out.println("rubrica : " + rubrica[i][y]);

			}

		}

	}

	public static boolean verificaPresenzaNome(String nome) {
		return true;
	}

	public static void stampaElegante() {
		for (int i = 0; i < rubrica.length; i++) {
			if (rubrica[i][0] != null) {
				System.out.println(" nome  " + rubrica[i][0].toUpperCase().charAt(0)
						+ rubrica[i][0].substring(1, rubrica[i][0].length()) + " cognome : "
						+ rubrica[i][1].toUpperCase().charAt(0) + rubrica[i][1].substring(1, rubrica[i][1].length())
						+ " citta :" + rubrica[i][1].toUpperCase() + "telefono : " + rubrica[i][3]);
			}
		}
	}

}
