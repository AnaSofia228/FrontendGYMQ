import '../App.css'
import FileGymUser from '../Layouts/FileGymUser';
import { NavBarUser } from '../Layouts/NavBarUser';

export function GymUser() {
    return ( 
        <div className='gym'>
            <div className='home_header'>
                <div><NavBarUser/></div>
            </div>
            <div className='gym-target'>
                <FileGymUser/>
            </div>
        </div>
    );
}