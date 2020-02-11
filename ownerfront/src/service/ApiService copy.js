import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:9999/users';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userNo) {
        return axios.get(USER_API_BASE_URL + '/' + userNo);
    }

    deleteUser(userNo) {
        return axios.delete(USER_API_BASE_URL + '/' + userNo);
    }

    addUser(user) {
        return axios.post(""+"http://localhost:9999/owners", user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.userNo, user);
    }


    ////////////////////////////////////////////////////////////////
    loginOwner() {
        return axios.post('http://localhost:1217/owners/login' + '/' + 'ownerID', 'password')
    }
    addOwners(owner) {
        return axios.post(""+'http://localhost:1217/owners', owner);
    }

    fetchOwner() {
        return axios.get('http://localhost:1217/owners');
    }

    fetchOwnerById(ownerNo) {
        return axios.get('http://localhost:1217/owners/' + ownerNo);
    }

    fetchOwnerToReview(ownerNo, storeName) {
        return axios.get('http://localhost:1217/owners/' + ownerNo );
    }
    
    fetchOwnerstore(ownerid, ownerpassword) {
        return axios.get('http://localhost:1217/owners/login/' + ownerid + '/' + ownerpassword)
    }
    
    //***** 음식점 페이지(store-info) *****
    fetchStoreinfo() {
        return axios.get('http://localhost:1217' + 'users');
    }
    
    StoreinfoaddUser(owner) {
        return axios.post("" + 'http://localhost:1217' + '/owners' + owner);
    }

    StoreinfoeditUser(owner) {
        return axios.put('http://localhost:1217/owners/' + owner.ownerNo, owner);
    }
    //****************************** 여기까지 음식점 페이지(store-info) ***********************************

    //***** 음식점 페이지의 리뷰작성부분 **********
    fetchReviews(ownerNo) {
        return axios.get('http://localhost:1217/storereview/'+ ownerNo );
    }

    deleteReview(storereviewNo) {
        return axios.delete('http://localhost:1217' + '/' + storereviewNo);
    }
    //****************************** 여기까지 음식점 페이지의 리뷰작성부분 ***********************************

    //***** 음식점 원격대기부분 **********
    fetchWaiting(waitNO) {
        return axios.get('http://localhost:1217' + '/' + waitNO);
    }

    deletereserve(waitNO) {
        return axios.delete('http://localhost:1217' + '/' + waitNO);
    }
    
    // addUser(reserve) {
    //     return axios.post(""+USER_API_BASE_URL, reserve);
    // }

    //****************************** 여기까지 음식점 원격대기부분 ******************************

    //***** 음식점 예약부분 *****
    fetchReservation(reservationNO) {
        return axios.get('http://localhost:1217' + '/' + reservationNO);
    }

    //음식점 예약 신청 숫자
    requestcountReserve(ownerNo){
        return axios.get('http://localhost:1217/reserve/requestcount/'+ownerNo)
    }

    //음식점 예약 신청 리스트
    requestListReserve(ownerNo){
        return axios.get('http://localhost:1217/reserve/request/'+ownerNo)
    }

    acceptReserve(reservationNO){
        return axios.get('http://localhost:1217/reserve/accept/'+reservationNO)
    }

    rejectReserve(reservationNO){
        return axios.get('http://localhost:1217/reserve/reject/'+reservationNO)
    }

    entranceReserve(reservationNO){
        return axios.get('http://localhost:1217/reserve/Entrance/'+reservationNO)
    }

    noshowReserve(reservationNO){
        return axios.get('http://localhost:1217/reserve/Noshow/'+reservationNO)
    }

    //오늘의 예약 숫자
    countReserve(ownerNo){
        return axios.get('http://localhost:1217/reserve/todaycount/'+ownerNo)
    }
    //오늘의 예약 리스트
    listtodayReserve(ownerNo){
        return axios.get('http://localhost:1217/reserve/today/'+ownerNo)
    }
    //오늘의 대기 숫자
    countWaiting(ownerNO){
        return axios.get('http://localhost:1217/waiting/'+ownerNO)
    }
    //오늘의 대기 리스트
    listWaiting(ownerNo){
        return axios.get('http://localhost:1217/waiting/list/'+ownerNo)
    }

    noshowwaiting(waitNO) {
        return axios.get('http://localhost:1217/waiting/Noshow/' + waitNO);
    }

    entrancewaiting(waitNO){
        return axios.get('http://localhost:1217/waiting/Entrance/'+waitNO);
    }
    //****************************** 여기까지 음식점 예약부분 ******************************

    //***** 음식점 랭킹부분 *****

        //** 음식점 좋아요 순위
    //     fetchstorelikes(){
    //         return axios.get('http://localhost:1217/');
    // }

        //** 음식점 별점 순위
    fetchstorestar(storereviewNo, nickname, star) {
        return axios.get('http://localhost:1217/store/' + storereviewNo + '/' + nickname + '/' + star)
    }
    // fetchstorestar(storereviewNo, nickname, star) {
    //     return axios.get('http://localhost:1217/storereview');
    // }

}

export default new ApiService();