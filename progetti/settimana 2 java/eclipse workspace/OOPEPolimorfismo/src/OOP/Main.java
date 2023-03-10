package OOP;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.Scanner;

import IT.Ennova.Dati.Dipendente;
import IT.Ennova.Dati.Persona;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String scelta;
		int sceltaInt;
		Scanner ks = new Scanner(System.in);
		ArrayList<String> arrayListMain = new ArrayList<String>();

		System.out.println(" premi 0 per ternimare il programma");
		System.out.println(" premi 1 per creare gli oggetti ");
		System.out.println(" premi 2 per creare l'arrayList");
		System.out.println(" premi 3 per cercare un nome nell'arrayList");
		System.out.println(" premi 4 per verificare l'hashtable");
		scelta = ks.nextLine();
		sceltaInt = Integer.parseInt(scelta);
		while (sceltaInt != 0) {

			switch (sceltaInt) {
			case 0:
				System.out.println(" programma terminato ");
				ks.close();
				break;
			case 1:
				oop();
				break;
			case 2:
				arrayListMain = ArraylistEsercizio(ks);
				break;
			case 3:
				RicercaNome(ks, arrayListMain);
				break;
			case 4:
				HashTableEsempoio();
				break;
			default:
				System.out.println(" Scelta non valida ");
				break;
			}

			System.out.println(" premi 0 per ternimare il programma");
			System.out.println(" premi 1 per creare gli oggetti ");
			System.out.println(" premi 2 per creare l'arrayList");
			System.out.println(" premi 3 per cercare un nome nell'arrayList");
			scelta = ks.nextLine();
		}

	}

	public static void oop() {
		Persona persona = new Persona("nome", "cognome", "email", "password", 0);
		Dipendente dipendente = new Dipendente("nome", "cognome", "email", "password", 0, "mansione", "tipologia",
				"tipologiaImpiego", "partitaIva");
	}

	public static ArrayList<String> ArraylistEsercizio(Scanner ks) {
//		gli array list non possono usare i tipi primitivi come tipo dell'arraylist 
		ArrayList<String> arrayList = new ArrayList<String>();

		String nome;
		System.out.println("Inserisci il nome");

		nome = ks.nextLine();

		for (int i = 0; i < 5; i++) {
			if (i != 0) {
				System.out.println("Inserisci il nome");
				nome = ks.nextLine();
			}
			arrayList.add(nome);
		}

		for (String string : arrayList) {
			System.out.println(string);
		}

		System.out.println(arrayList);

		return arrayList;

	}

	public static void RicercaNome(Scanner ks, ArrayList<String> arrayList) {
		String NomeCercato;
		boolean NomeTrovato;
		System.out.println("inserisci il nome da cercare ");
		NomeCercato = ks.nextLine();
		NomeTrovato = arrayList.contains(NomeCercato);
		if (NomeTrovato == true) {
			System.out.println("il nome e presente nell'arrayList ");
		} else {
			System.out.println("il nome non e presente nell'arrayList ");
		}

	}

	public static void HashTableEsempoio() {
//		Questo codice e un errore logico perche le variabili puntano a delle zone di memoria 
//		il loro contenuto sono delle zone di memoria quindi mettere dentro clienteTest i dati usando i set andra clienteTest
//		sovrascire i dati dell'oggetto precendente , perche in questo caso il passaggio e per refence 
		Persona clienteTest = new Persona();
		clienteTest.setNome("Mario");
		clienteTest.setNome("Cognome");
		Hashtable<Integer, Persona> hashtable = new Hashtable<Integer, Persona>();
		hashtable.put(10, clienteTest);
		clienteTest.setNome("Mario");
		clienteTest.setNome("Cognome");
		hashtable.put(11, clienteTest);

		System.out.println(hashtable.get(11).getNome());

//		Per risolverlo usiamo una nuova classe ad ogni asseggnazione

		Persona clienteTest2 = new Persona();
		clienteTest.setNome("Mario");
		clienteTest.setNome("Cognome");
		Hashtable<Integer, Persona> hashtable2 = new Hashtable<Integer, Persona>();
		hashtable2.put(10, clienteTest);
		clienteTest = new Persona();
		clienteTest.setNome("Mario");
		clienteTest.setNome("Cognome");
		hashtable2.put(11, clienteTest);

	}

}
