package IT.Ennova.Servizi;

public class Servizi {
	public void decryptData( String fileContent) {

		// stringa tipo ugo,rossi,numtelefono , che contiene tutto il record estrarre il
		// nome , cognome estampare sullo schermo ad esempio nome : ugo , cognome ,
		// rossi
		// da un array di stringhe opzioanle

//			String record = "ugo,rossi,pisa,3458232";
		
//		fileContent = letturaFile(fileContent);

		String[] ArrayRecord = fileContent.split(";");
		String[] ArrayRecordSplitByComa ;
		for(int i=0;i<ArrayRecord.length;i++) {
			ArrayRecordSplitByComa = ArrayRecord[i].split(",");

		System.out.println(" nome : " + ArrayRecordSplitByComa[0] + ", cognome : " + ArrayRecordSplitByComa[1] + ", citta : " + ArrayRecordSplitByComa[2]
				+ ", telefono : " + ArrayRecordSplitByComa[3]);
		}

	}
}
