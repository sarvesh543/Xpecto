import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";
import Razorpay from "../component/payment/Razorpay";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Sidebar from '../../../components/Sidebar/Sidebar';
const Home = () => {
	const user=useSelector((state)=>state.userinfo);
	const [newuser,setnewuser]=useState(user)
    const navigate=useNavigate();
	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_BACKENDURL}/auth/login`;
			const { data } = await axios.get(url, { withCredentials: true });
			// console.log("data",data)
			console.log("data after signin ",data)
            setnewuser(newuser=>({
				...newuser,
				email:data.data.email,
				displayname:data.data.displayName,
				image:data.data.image,
				firstname:data.data.firstName
			}));
            // setnewuser({...newuser,displayname:data.data.displayName});
            // setnewuser({...newuser,image:data.data.image});
            // setnewuser({...newuser,firstname:data.data.firstName});
			console.log("newdata",newuser);
            // if(data.isnewuser){
				
            //     navigate("/signup");
			// }
        //    userdata.em
		} catch (err) {
			console.log(err);
		}
	};

	// useEffect(() => {
	// 	getUser();
	// }, []);

    // const usera = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_BACKENDURL}/auth/logout`, "_self");
	};
    const googleAuth = async() => {
		window.open(
			`${process.env.REACT_APP_BACKENDURL}/auth/google/callback`,
			"_self"
		);
		getUser();
	};
	// console.log("usedetail " ,user)
    return (

		<div className={styles['page']} style={{backgroundImage: `url(${process.env.PUBLIC_URL}home/background.jpg)`}}>
			<Sidebar />
		
			<div className={styles['section1']}>
				<img className={styles['section1-plus']} src={`${process.env.PUBLIC_URL}home/plusplus.svg`} alt='plusplusgraphic' />
				<img className={styles['mainlogo']} src={`${process.env.PUBLIC_URL}home/mainlogo.svg`} alt='XpectoLogo' />
				<img className={styles['section1-rightrectangle']} src={`${process.env.PUBLIC_URL}home/rightrectangle.svg`} alt='rightrectangle' />
				<img className={styles['section1-scrolldown']} src={`${process.env.PUBLIC_URL}home/scrolldown.svg`} alt='scrolldown' />
				<img className={styles['section1-bottomleftgraphic']} src={`${process.env.PUBLIC_URL}home/lineslines.svg`} alt='bottomleftgraphic' />
				<img className={styles['section1-register']} src={`${process.env.PUBLIC_URL}home/register.svg`} alt='register' />
			</div>
			<div style={{height: '300vh'}}>
		
			</div>
		</div>
        // <>
        // <div className={styles["page"]}>
        //     <Link to="/admin/dashboard">Go to Admin Dashboard</Link>
        // </div>
        // <Button variant="outlined" onClick={googleAuth} sx={{ m: 5 }}>Sign in google</Button>
        // <Button variant="outlined" onClick={googleAuth} sx={{ m: 5 }}>Login with google</Button>
        // <Button variant="outlined" onClick={logout} sx={{ m: 5 }}>Logout</Button>
		// <div>
		// 	<Razorpay/>
		// </div>
        // </>
    );
};

export default Home;
