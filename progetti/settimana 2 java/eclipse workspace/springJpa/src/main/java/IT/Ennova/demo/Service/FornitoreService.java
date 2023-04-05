package IT.Ennova.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import IT.Ennova.demo.Model.Fornitore;
import IT.Ennova.demo.Repository.IFornitoreReposiotry;

@Service
public class FornitoreService  {
	@Autowired
	IFornitoreReposiotry IFrornitoreReposiotry;
	
	
	public Iterable<Fornitore> getfornitori() {
		return this.IFrornitoreReposiotry.findAll();
	}

}
