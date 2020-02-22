package bit.yam.bean;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReservationDao extends CrudRepository<Reservation, Integer> {

    Reservation findByUsername(String uName);
   
}
