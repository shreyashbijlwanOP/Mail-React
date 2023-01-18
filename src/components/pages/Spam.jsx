import React from 'react'
import VerticalNavbar from '../navbar/Navbar'
import MailViewList from '../ViewSection/MailView'
import data from '../../1_spam.json'
const Spam = () => {
  return (
  
    <div className='container-fluid'>
        <div className="row">
            <div className="col-2">
            <VerticalNavbar/>
            </div>
            <div className="col-3">
            <MailViewList mails={data}/>
            </div>
            <div className="col-7">

            </div>
        </div>
    </div>
  )
}

export default Spam