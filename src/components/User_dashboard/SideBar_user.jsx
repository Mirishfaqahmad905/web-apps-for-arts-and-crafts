import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,  faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const SideBar_user = () => {
  return (
   <div className="container_side_bar">
     <li><a href=""><FontAwesomeIcon icon={faHome} /> Dashboard</a></li>
      <li><a href=""><FontAwesomeIcon icon={faHome} /> Home  </a></li>
      <li><a href=""><FontAwesomeIcon icon={faMoneyBill} /> Your Payments Details  </a></li>
      <li><a href=""><FontAwesomeIcon icon={faHome} /> Your Others Detail </a></li>
      <li><a href=""><FontAwesomeIcon icon={faHome} />user delivery address</a></li>
       
   </div>
  )
}

export default SideBar_user