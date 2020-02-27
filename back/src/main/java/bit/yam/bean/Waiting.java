package bit.yam.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "waiting")
public class Waiting {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int waitNO;
    @Column
    private int ownerNo;
    @Column
    private int userNo;
    @Column
    private int waitingList;
    @Column
    private String username;
    @Column
    private String phone;
    @Column
    private int adult;
    @Column
    private int child;
    @Column
    private String request;
    
	public int getWaitNO() {
		return waitNO;
	}
	public void setWaitNO(int waitNO) {
		this.waitNO = waitNO;
	}
	public int getOwnerNo() {
		return ownerNo;
	}
	public void setOwnerNo(int ownerNo) {
		this.ownerNo = ownerNo;
	}
	public int getUserNo() {
		return userNo;
	}
	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}
	public int getWaitingList() {
		return waitingList;
	}
	public void setWaitingList(int waitingList) {
		this.waitingList = waitingList;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public int getAdult() {
		return adult;
	}
	public void setAdult(int adult) {
		this.adult = adult;
	}
	public int getChild() {
		return child;
	}
	public void setChild(int child) {
		this.child = child;
	}
	public String getRequest() {
		return request;
	}
	public void setRequest(String request) {
		this.request = request;
	}
    
    
}