import React from "react";
import ContactCards from "./ContactCards";

const ConactList = (props) => {
     console.log(props);

       const renderContactList = props.contacts.map((contact) => {
          return(
             <ContactCards contact={contact} />
          );
       });
     return <div className="ui celled list">{renderContactList}
          </div>;
     
};



export default ConactList;