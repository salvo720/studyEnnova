package IT.Ennova.demo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import IT.Ennova.demo.Model.Fornitore;

@Repository
public interface IFornitoreReposiotry extends CrudRepository<Fornitore,Integer> {
	
	

}
