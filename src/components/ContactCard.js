import React from "react";
import './index.css';
import user from "../images/user.png";

const ContactCard = (props) => {
        //Desestruturação       
        const {id, name, email} = props;
        //Mas estou passando direto pela props.atributo declarado no componente
        return(
            <>
            <div key={props.info.id} className="item" >
                         <img className="ui tiny image" src={user} alt="user" />
                         <div className="content">
                           <div className="header">{props.info.name}</div>
                           <div>{props.info.email}</div>                  
                         </div>
                         <div>
                         <i onClick={() => props.clickHandler(props.info.id)} className="right trash alternate outline icon" style={{color:"red", marginTop:"7px"}}></i>
                         </div>
            </div>
            <div class="ui divider"></div>
            </>
        )
}


export default ContactCard;
