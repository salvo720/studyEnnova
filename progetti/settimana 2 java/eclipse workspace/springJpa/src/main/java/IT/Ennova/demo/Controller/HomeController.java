package IT.Ennova.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	
	
	@GetMapping("/")
	@ResponseBody
	public static String index(String[] args) {
		// TODO Auto-generated method stub
		return "pagina index";

	}
	
	// non consentire mai al plug-in di editare il file pom.xml 
	// altrlimenti vai a perdere il file application.property gia incluso di default
	
	/*
	//in ogni caso se lo dovessi perdere ecco qui un esempio , editato con i tuoi dati :
	
 		<dependency>
			<groupId>com.example</groupId> //nome dei tuoi package 
			<artifactId>SpringBootEsercizio</artifactId> // nome del tuo progetto 
			<version>0.0.1-SNAPSHOT</version> // non toccare  include cose 
		</dependency>
		
	*/
		
	
	// auth con md5 postgres : vai su sul path di postgresSql>15>data>pg_hba.conf , 
	// aprilo e sotto type local method cambialo in md5 
	
}
