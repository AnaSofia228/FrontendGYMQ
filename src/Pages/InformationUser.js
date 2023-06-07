import '../App.css'
import InfoGym from '../Layouts/InfoGym';
import { NavBarUser } from '../Layouts/NavBarUser';
 
export function InformationUser() {
    return ( 
        <div>
            <div className='home_header'>
                <div><NavBarUser/></div>
            </div>
            <div className='infoGym'>
                <InfoGym/>
            </div>
        </div>
    );
}