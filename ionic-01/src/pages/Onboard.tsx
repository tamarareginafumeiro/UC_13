import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';
import "./Onboard.css";

function Onboard () {

    return (
        <IonContent fullscreen>
            <div className="onboard-page">
                <div className='header'>
                    <IonIcon icon={bookOutline}></IonIcon>
                </div>
                <div className='body-content'>
                    <div className='number'>
                        01.
                    </div>
                    <div className="desc">
                        Encontre vários programadores par ensinar você
                    </div>
                </div>
                <div className='control'>
                    <ul className='dots'>
                        <li className='active'></li>
                        <li></li>
                    </ul>
                    <div className="arrow"></div>
                </div>
            </div>
        </IonContent>
    )
}

export default Onboard;