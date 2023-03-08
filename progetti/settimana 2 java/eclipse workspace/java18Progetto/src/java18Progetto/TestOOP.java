package java18Progetto;

import java.util.Scanner;

public class TestOOP {
	
	public static int numeroElementiInseriti = 0;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String valoreInput;
		char elementoCercato = 'a';
		System.out.println("aggiungi una frase ");

		Scanner Ss = new Scanner(System.in);
		valoreInput = Ss.nextLine();
		System.out.println("hai scritto la seguente frase : " + valoreInput);
		String stringa1 = "ciao ";
		String stringa2 = "ciao Mondo ! ";

		if (stringa1.length() > stringa2.length()) {
			System.out.println("stringa1 e piu lunga di stringa2 ");
		} else {
			System.out.println("stringa2 e piu lunga di stringa1 ");
		}

		if (stringa1 == valoreInput) {
			System.out.println(" le stringhe sono uguali  ");
		} else {
			System.out.println(" le  stringhe non sono uguali  ");
		}

		System.out.println("valoreInput : " + valoreInput);
		int counter = 0;
		char[] alfabeto = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
				'u', 'v', 'z' };
		double media;

		for (int y = 0; y < alfabeto.length; y++) {
			counter = 0;
			for (int i = 0; i < stringa1.length(); i++) {
				if (stringa1.charAt(i) == alfabeto[i]) {
					counter++;
				}

			}
//			if (counter != 0) {
			media = (double) stringa1.length() / counter;
			System.out.println("il carattere " + alfabeto[y] + "  e presente : " + counter + " volte "
					+ " e la sua media e : " + media);
//			}
		}
//		avendo una frase di dimensione variabile , la frequenza con cui si prensetano i caratteri dell'alfabeto italiano 
//		l'uotput dovra essere la lettera a e presente 10 volte 
//		la frse ha una lunghezza massima casuale 

		// ArrayMultidimensionale

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

	/**
	 * inserisce un record
	 */

	public static void inserismentoRecord() {
		
		

	}

	/**
	 * stampa tutti i record presenti
	 */
	public static void stampaRublica() {

	}
	
	public static boolean verificaPresenzaNome(String nome) {
		return true;
	}

}
