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
		return "autisti";
	}
}
