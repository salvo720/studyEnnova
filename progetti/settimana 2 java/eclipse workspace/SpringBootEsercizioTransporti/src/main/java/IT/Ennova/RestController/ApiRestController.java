package IT.Ennova.RestController;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import IT.Ennova.BusinessLogic.BusinessLogic;
import IT.Ennova.Model.Autista;

@RestController
public class ApiRestController {
	
	@GetMapping("/autisti")
//	@RequestBody
	public ArrayList<Autista> getAutisti(){
		ArrayList<Autista> ArrayListAutista = BusinessLogic.getAutista();
		return ArrayListAutista;
	}

}
