//matarial-ul 쓸꺼얌
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../Img/logo.png';

const style = {
  flexGrow: 1
};

class NavBar extends React.Component {
  render() {
    //props 설정
    const { logged, onLogout } = this.props;

    const styled = {
      textAlign: "right",
      fontFamily: "Public Sans"
    };

    return (
      <div style={styled}>
        <AppBar position="static" id="appbar">
          <Toolbar >
            <Link to="/main" className="Nav_Links_home">
              <p id="title">맛집의 민족<img src={logo} id="logoimg"/></p>
            </Link>
            <Link to="/main" className="Nav_Links">
              HOME
            </Link>
            <Link to="/ownerList" className="Nav_Links">
              음식점 &nbsp;전체보기
            </Link>
            <Link to="/list" className="Nav_Links">
              유저들의 &nbsp;맛집로드
            </Link>
            <Link to="/project" className="Nav_Links">
            맛집로드 &nbsp;만들기
            </Link>
            <Link to="/chat" className="Nav_Links">
              채팅
            </Link>
            <Link to="/users" className="Nav_Links">
              다른 &nbsp;유저 &nbsp;구경가기
            </Link>
            
            {(sessionStorage.getItem("adminID") )|| (
            <Link to="/mypage" className="Nav_Links">
              마이 &nbsp;페이지
            </Link>
            )}
            
            {logged ? (
              <div style={styled}>
                <div>
                  <Link to="/" onClick={onLogout} className="Nav_Links">
                    {" "}
                    로그아웃{" "}
                  </Link>
                </div>
              </div>
            ) : (
              <div style={styled}>
                <div>
                  <Link to="/login" className="Nav_Links"> 로그인 </Link>
                </div>
              </div>
            )}

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;