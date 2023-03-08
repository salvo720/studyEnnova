package IT.Ennova.Business;

import java.io.File;
import java.io.FileReader;

import IT.Ennova.Servizi.Servizi;

public class FileStorage {

	public void readFile(File file) {

		Servizi servizi = new Servizi();

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
//				aggiungo una linea di spazio 
			System.out.println();
		} catch (Exception e) {
			e.printStackTrace();
		}

		servizi.decryptData(FileContent);
	}

//	leggere il file e invoca la classe di servizi per decifrare i file 

//	ReadFile legge , servizi metodo decrifra e la logica deve essere main > bl > servizi 

}
