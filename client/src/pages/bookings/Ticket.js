import React from "react";
import './Ticket.css'

// function Ticket () {
function Ticket ({bookingdata}) {
    console.log(bookingdata)

    return ( 
        <div class="invoice-box">
        <img class="backimg1" alt="description" src="./winlogo2.jpeg" height="150" width="150" >.</img>
        <img class="backimg2" alt="description" src="./winlogo2.jpeg" height="150" width="150" >.</img>

        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <div class="logo">
                        <img src="./bookmystall.jpeg"alt="descri" width="120" height="120"></img>
                    </div>
                    <h4 class="title">Stall Booking Details</h4>


                </td>
            </tr>

            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                Invoice #:123 <br></br>
                                {/* <!-- Created: "Current Date and Time" --> */}
                                <br></br><br></br>

                                Farmer Name <br></br>
                                Phone  <br></br>
                                Farmer Market Address <br></br>
                                Date and Timing of Market <br></br>
                                Payment Details <br></br>
                                Total no. of Stalls <br></br>
                                Stall fare
            

                            </td>
                        </tr>
                    </table>
                    {/* <!-- inner table end --> */}
                </td>
            </tr>
            <tr>
                <td class="heading">Wingrow Agritech GST Details: <br></br>
                    GSTIN: 27AACCW0275G1ZD <br></br>
                    Wingrow Agritech Producer Company Ltd.
                    Sn 637, b/2, <br></br>
                    Omkarnagar, PMT Colony, Pokale Wasti, Bibwewadi, Pune - 411037 <br></br>
                    Email:connect@wingrowagritech.com <br></br>
                    Contact: +917776003700
                </td>
                
                
            </tr>
            
        </table>
        <h2 class="thanks">Thank You !</h2>


    </div>
     );
}

export default Ticket  ;