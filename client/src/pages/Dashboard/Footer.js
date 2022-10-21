import React from "react";

import {
Box,
Container,
Row,
Column,

FooterLink,
Heading,
} from "../Dashboard/Footerstyle";

const Footer = () => {
	
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>Wingrow Agritech</Heading>
            <FooterLink href="#">Wingrow agritech Producer Company Ltd., Sn 637,b/2, Omkarnagar, Pmt colony, Pokale Wasti, Bibwewadi, Pune-411037<br></br>
            </FooterLink>
			<FooterLink href="mailto:connect@wingrowagritech.com" >connect@wingrowagritech.com</FooterLink>
			<FooterLink href="#">+91 777 600 3700</FooterLink>


		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="/">Home</FooterLink>
			{/* <FooterLink href="/customers">Customers</FooterLink> */}
			<FooterLink href="/farmers">Farmers</FooterLink>
			{/* <FooterLink href="/register">Register</FooterLink> */}
			{/* <FooterLink href="/cart">Cart</FooterLink> */}
			<FooterLink href="/bookings">Stall Bookings</FooterLink>
			
			
			
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="mailto:connect@wingrowagritech.com">Contact </FooterLink>
            			<FooterLink href="/customers">Customers</FooterLink>

		</Column>

        <Column>
			<Heading>Legal</Heading>
			<FooterLink href="/terms">Terms and Conditions </FooterLink>
		</Column>

		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/Wingrow-Agritech-Producer-Company-Limited-4">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://instagram.com/wingrowagritech?utm_medium=copy_link">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			{/* <FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink> */}
			<FooterLink href="https://www.linkedin.com/company/31488381">
			<i className="fab fa-linledin">
				<span style={{ marginLeft: "10px" }}>
				Linkedin
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',textAlign:'center' }}>
    &copy; 2022 Copyright:
        <a className='text-reset fw-bold' href='https://www.wingrowagritech.com/'>
         Wingrow Agritech. Developed by<span > Wingrow Agritech</span>. All rights reserved.
        </a>
      </div>
	</Box>
);
};
export default Footer;
