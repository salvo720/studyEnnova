package Progetto;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("hello world !");

		System.out.println("hello world !");
		System.out.println(false);

		int a = 10 + 4 / 2, b = 1;
		boolean l = true;
		byte q;

		a = b + 5;

		System.out.println();

		int baseTriangolo = 4, altezzaTriangolo = 10, areaTriangolo;

		areaTriangolo = baseTriangolo * altezzaTriangolo / 2;

		System.out.println(" l'area del traingolo e : " + areaTriangolo);

		int test = 5;
		if (test == 5) {
			System.out.println("test :" + test);
		}

		int testA = 7, testB = 8, testC = 2;

		if (testA > testB) {
			System.out.println("testA e maggiore di testB , e vale :" + testA);

			if (testC > testA) {
				System.out.println("testC e maggiore di testA , e vale :" + testC);

			} else {
				System.out.println("testA e maggiore di testC , e vale :" + testA);
			}
		}

		if (testA < testB) {
			System.out.println("testB e maggiore di testA , e vale :" + testB);

			if (testC > testB) {
				System.out.println("testC e maggiore di testB , e vale :" + testC);

			} else {
				System.out.println("testB e maggiore di testC , e vale :" + testA);
			}
		}
		if (testA == testB) {
			System.out.println("testA e uguale a testB , e vale :" + testB);
		}

		int loopNum = 0, loopMax = 5;
//		il while usato quando non conosciamo il numero di iterazioni 
		while (loopNum < loopMax) {
			System.out.println("ciao : " + loopNum);
			loopNum++;
		}

//		il for viene usato quando conosciamo gia quante volte verra eseguito il loop 
		for (int i = 0; i < loopMax; i++) {
			System.out.println("ciao : " + i);
		}

		int lunghezzaArray = 5;
		int max = 10, min = 0, numInput;

		int[] arrayInt = new int[lunghezzaArray];

		for (int i = 0; i < lunghezzaArray; i++) {
			int num = (int) ((Math.random() * (max - min)) + min);
			arrayInt[i] = num;
			System.out.println("i : " + i + " " + arrayInt[i]);

		}

		int numMagg = 0, numMin = 10, media = 0, lenghtArray, nextIndex;
		lenghtArray = lunghezzaArray - 1;
		for (int i = 0; i < lenghtArray; i++) {
			nextIndex = i + 1;
			if (nextIndex > lenghtArray) {
				continue;
			}
			// numero piu grande
			if (numMagg < arrayInt[i]) {
				numMagg = arrayInt[i];
//				System.out.println("numMagg if :" + numMagg + " " + arrayInt[i]);
			} 

			// numero piu piccolo da fixare
			if (arrayInt[i] < numMin) {
				numMin = arrayInt[i];
//				System.out.println("numMin if :" + numMin + " " + arrayInt[i]);
			} 

			media += arrayInt[i];
			if (i == (lenghtArray)) {
				media = media / lenghtArray;
			}

		}

		System.out.println("numMagg :" + numMagg);
		System.out.println("numMin :" + numMin);
		System.out.println("media :" + media);

//		come dichiarare un input 

//		Scanner prova = new Scanner(System.in);

//		numInput = prova.nextInt();

//		System.out.println();

//		somma 2 input 

		int aSomma, bSomma, risultato;

		System.out.println(" inserisci il valroe di a : ");
		Scanner valoreA = new Scanner(System.in);
		aSomma = valoreA.nextInt();

		System.out.println(" inserisci il valroe di b : ");

		Scanner valoreB = new Scanner(System.in);
		bSomma = valoreB.nextInt();

		risultato = aSomma + bSomma;

		System.out.println("risultato : " + risultato);

//		inserisci qualunque valore tranne lo 0 
		int valoreST, contatoreSt = 0;
		float mediaST = 0;

		System.out.println(" inserisci il valroe qualunque tranne lo 0  : ");
		Scanner scannerTest = new Scanner(System.in);
		valoreST = scannerTest.nextInt();
		while (valoreST != 0) {
			System.out.println(" inserisci il valroe qualunque tranne lo 0  : ");
			valoreST = scannerTest.nextInt();
			mediaST = mediaST + valoreST;
			// ritorna la media degli elementi di input
			if (valoreST == 0) {
				mediaST = mediaST / contatoreSt;
				System.out.println("mediaST : " + mediaST);
			} else {
				contatoreSt++;
			}
		}

	}

}
