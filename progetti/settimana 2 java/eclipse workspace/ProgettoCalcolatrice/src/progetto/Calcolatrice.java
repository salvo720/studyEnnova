package progetto;

import java.util.Scanner;

public class Calcolatrice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		calcolatrice();
	}

	public static void calcolatrice() {

		int aSomma = 0, bSomma = 0, risultato, operazioneValore, contatore = 0;

		System.out.println("inserisci l'operazione da effettuare : ");
		System.out.println("0 termina ");
		System.out.println("1 somma ");
		System.out.println("2 differenza");
		System.out.println("3 moltiplicazione");
		System.out.println("4 divisione");

		Scanner operazione = new Scanner(System.in);
		operazioneValore = operazione.nextInt();

		while (operazioneValore != 0) {

			if (contatore != 0) {
				System.out.println("inserisci l'operazione da effettuare : ");
				System.out.println("0 termina ");
				System.out.println("1 somma ");
				System.out.println("2 differenza");
				System.out.println("3 moltiplicazione");
				System.out.println("4 divisione");

//			Scanner operazione = new Scanner(System.in);
				operazioneValore = operazione.nextInt();
			}
			contatore++;

			if (operazioneValore != 0) {
				System.out.println(" inserisci il valroe di a : ");
				Scanner valoreA = new Scanner(System.in);
				aSomma = valoreA.nextInt();

				System.out.println(" inserisci il valroe di b : ");

				Scanner valoreB = new Scanner(System.in);
				bSomma = valoreB.nextInt();
			}

			switch (operazioneValore) {
			case 0:
				System.out.println("programma terminato : ");
				break;
			case 1:
				risultato = Somma(aSomma, bSomma);
				System.out.println("somma risultato : " + risultato);
				break;
			case 2:
				risultato = Sottrazzione(aSomma, bSomma);
				System.out.println("differenza risultato : " + risultato);
				break;
			case 3:
				risultato = Moltiplicazione(aSomma, bSomma);
				System.out.println("moltiplicazione risultato : " + risultato);
				break;
			case 4:
				risultato = Divisione(aSomma, bSomma);
				System.out.println("divsione risultato : " + risultato);
				break;
			default:
				System.out.println("errore inserito valore non incluso ");
				break;
			}
		}
//		System.out.println("risultato : " + risultato );
	}

	public static int Somma(int valore1, int valore2) {
		return valore1 + valore2;
	}

	public static int Moltiplicazione(int valore1, int valore2) {
		return valore1 * valore2;
	}

	public static int Divisione(int valore1, int valore2) {
		return valore1 / valore2;
	}

	public static int Somma(int valore1, int valore2, int valore3) {
		return valore1 + valore2 + valore3;
	}

	public static float Somma(float valore1, float valore2) {
		return valore1 + valore2;
	}

	public static float Somma(float valore1, float valore2, float valore3) {
		return valore1 + valore2 + valore3;
	}

	public static int Sottrazzione(int valore1, int valore2) {
		return valore1 - valore2;
	}

	public static int Sottrazzione(int valore1, int valore2, int valore3) {
		return valore1 - valore2 - valore3;
	}
	
	// usando la metodologia della programamzione strtturata creare un programma che :
//	1)  possa inserire gli elementi dell'array e l'inserimento e continuo finche l'utente non iserisce 0 
//	2) funzione che rileva il numero massimo tra gli elementi inseriti che e di 100 e l'inserimento si interrompe se raggiungiamo il valore massimo di eleemnti che e di 100 
//	3) calcolo delle media 
//	4) stampa il contenuto del vettore 
//	l'array deve essere utilizzabbile da tutte le funzione quanidi va creato come array globale prima di main 
// il vettore e formato da 100 elementi di default 
}
