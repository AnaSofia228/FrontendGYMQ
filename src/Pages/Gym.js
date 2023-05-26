import '../App.css'
import { HomeNavBar } from '../Layouts/HomeNavBar';
import Target from '../Ui/Target';

export function Gym() {
    return ( 
        <div>
            <div className='home_header'>
                <div><HomeNavBar/></div>
            </div>
            <div className='gym-target'>
                <Target/>
                <Target/>
                <Target/>
                <Target/>
                <Target/>
            </div>
        </div>
    );
}