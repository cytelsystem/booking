import Card from '../Card/Card';
import './Alert.scss';

export default function Alert({type, children}) {
    return (
        <div className={`db-alert`}>
            <Card>
                <div className={`db-alert-content ${type}`}>
                    {children}
                </div>
            </Card>
            
        </div>
    )
}