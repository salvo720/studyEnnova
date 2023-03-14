package IT.Ennova.demo.RestController;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import IT.Ennova.demo.BusinessLogic.BusinessLogic;
import IT.Ennova.demo.Model.Autista;

@RestController
public class ApiRestController {
	
	@GetMapping("/saluto")
	public String getSALUTO(){
		return "saluto";
	}
	
	@GetMapping("/autisti")
//	@RequestBody
	public ArrayList<Autista> getAutisti(){
		ArrayList<Autista> ArrayListAutista = BusinessLogic.getAutista();
		return ArrayListAutista;
	}

}
