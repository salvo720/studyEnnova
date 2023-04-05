package IT.Ennova.demo.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import IT.Ennova.demo.Model.Fornitore;

@RestController
public class FornitoreRestController {

	@Autowired
	iFornitoreService IFornitoreService; 
	
	@GetMapping("/fornitori")
	public static Iterable<Fornitore> getFornitori(String[] args) {
		//

	}

}
