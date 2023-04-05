package IT.Ennova.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class homeController {
	
	@GetMapping("/")
	@ResponseBody
	public String ciao() {
		return "ciao";
	}
	
	@GetMapping("/autisti")
//	@ResponseBody
	public String showAutisti(){
		return "index";
	}
}


/* il database e detto relazione e transazionale :
 * 
 * 
 * relazionale : ovvero le nostre tabelle vengono dette anche relazioni 
 * e le relazione seguono tutte lo stesso schema , ovvero avranno tutti
 *  gli stessi campi per ogni record(riga) di quella tabella 
 *  
 *  transazionale : ( vaga da migiorare    ) ovvero la possibbilita di eseguire transazioni sui dati ,
 *  ad esempio nel caso di acquisto bisonga verificare prima che il saldo sia
 *   disponibile per eseguire la transazione 
 *  
 * 
 * oltd : database di supporto dei nostri programmi che seguono le regole di normalizzazione 
 * il loro scopo e ridurre il numero di operazioneda svolgere soprattutto aggiornamenti e inserimenti
 * scomponiamo i dati per evitare le ridondanze , e avviene cio sostituendo ad esso con un riferimento  
 * 
 * olap : si denornalizza la struttura del database
 * 
 * 
 * 
 * strutture : 
 * 1 a n , anche deta master details 
 * 
 * orm : object relation model , gli orm si riferiscono ad un modello relazionale 
 * usando un ambiente orientato agli oggetti ci da la possibilita di usare gli oggetti 
*/
 */