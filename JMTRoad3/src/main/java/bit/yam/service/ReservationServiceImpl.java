package bit.yam.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bit.yam.bean.Reservation;
import bit.yam.bean.ReservationDao;

/*@Transactional*/
@Service(value = "reservationService")
public class ReservationServiceImpl implements ReservationService {
	
	@Autowired
	private ReservationDao reservationdao;

	public List<Reservation> findAll() {
		List<Reservation> list = new ArrayList<>();
		reservationdao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int reservationNO) {
		reservationdao.deleteById(reservationNO);
	}

	@Override
	public Reservation findById(int reservationNO) {
		Optional<Reservation> optionalUser = reservationdao.findById(reservationNO);
		return optionalUser.isPresent() ? optionalUser.get() : null;
	}

	@Override
	public Reservation save(Reservation user) {
		Reservation newReserve = new Reservation();
	    newReserve.setUsername(user.getUsername());
	    newReserve.setPhone(user.getPhone());
	    newReserve.setRegdate(user.getRegdate());
	    newReserve.setRetime(user.getRetime());
	    newReserve.setAdult(user.getAdult());
	    newReserve.setChild(user.getChild());
	    newReserve.setRequest(user.getRequest());
        return reservationdao.save(newReserve);
	}

	

}
