package Array;

import java.util.Scanner;

public class ArrayCento {

	public int MaxLenghtArray = 100;
	int[] ArrayCento = new int[MaxLenghtArray];

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int opScelta, numMaggiore;
		boolean FirstRunn = true;
		int[] ArrayCento = new int[100];

		ArrayCento ObjArrayCento = new ArrayCento();
		
		opScelta = messagioSceltaOPerazione();

		while (opScelta != 0) {
			if(FirstRunn == false)
			opScelta = messagioSceltaOPerazione();

			switch (opScelta) {
			case 0:
				System.out.println("programam terminato  ");
				break;
			case 1:
				aggiungi(ObjArrayCento, ArrayCento);

				break;
			case 2:
				NumMaggiore(ObjArrayCento, ArrayCento);
				break;
			case 3:
				MediaNumeri(ObjArrayCento, ArrayCento);
				break;
			case 4:
				StampaArray(ObjArrayCento, ArrayCento);
				break;
			default:
				System.out.println("scelta non valida ");
				break;
			}
			
			FirstRunn = false;
		}

	}
	
	public static int messagioSceltaOPerazione() {
		int operazioneValue;
		System.out.println("Inserisci il valore intero della varabile ");
		System.out.println("se inserisci 0 l'applicazione terminera ");
		System.out.println("se inserisci 1  per aggiungere un elemento all'array");
		System.out.println("se inserisci 2 per vedere il valore massimo ");
		System.out.println("se inserisci 3 per vedere la media ");
		System.out.println("se inserisci 4 per stampare l'array ");

		Scanner operazione = new Scanner(System.in);
		operazioneValue = operazione.nextInt();
		
		return operazioneValue;
		
	}
	

	public static void aggiungi(ArrayCento ObjArrayCento, int[] ArrayCento) {
		int elementoPush = 0;
		System.out.println("inserisci il valore da aggiungere all'array ");
		System.out.println("inserisci il valore 0 per terminare l'inserimento");

		Scanner valore = new Scanner(System.in);
		elementoPush = valore.nextInt();
		for (int indexArray = 0; indexArray < ObjArrayCento.MaxLenghtArray && indexArray < 100; indexArray++) {

			if ( elementoPush == 0 ) {
				break;
			}

			if ( indexArray != 0 ) {
				System.out.println("inserisci il valore da aggiungere all'array");
				elementoPush = valore.nextInt();
			}

			ArrayCento[indexArray] = elementoPush;

		}

	}

	public static void NumMaggiore(ArrayCento ObjArrayCento, int[] ArrayCento) {
		int NumMaggiore = 0;
		for (int i = 0; i < ObjArrayCento.MaxLenghtArray; i++) {
			if ( NumMaggiore < ArrayCento[i] ) {
				NumMaggiore = ArrayCento[i];
			}

		}
		System.out.println("NumMaggiore e : " + NumMaggiore);

	}

	public static void MediaNumeri(ArrayCento ObjArrayCento, int[] ArrayCento) {
		float Media = 0, Elment = 0;
		for (int i = 0; i < ObjArrayCento.MaxLenghtArray; i++) {
			if ( ArrayCento[i] != 0 ) {
				Media += ArrayCento[i];
				Elment++;
			}

		}
		Media = Media / Elment;
		System.out.println("Media e : " + Media);

	}

	public static void StampaArray(ArrayCento ObjArrayCento, int[] ArrayCento) {
		for (int i = 0; i < ObjArrayCento.MaxLenghtArray; i++) {
			System.out.println("i : " + i + " " + ArrayCento[i]);
		}

	}

}
