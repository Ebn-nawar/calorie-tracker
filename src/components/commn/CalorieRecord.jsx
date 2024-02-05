import 'bootstrap/dist/css/bootstrap.min.css';
import FormattedDate from '../caloriesFormatted/FormattedDate';
import ListGroup from '../caloriesFormatted/ListGroup';
import { useState } from 'react';

function CalorieRecord(props) { 
    const [currentCalorie, setCurrentCalorie] = useState(props.calories)
    const currentCalorieHandler = () => {
        setCurrentCalorie(currentCalorie + 10)
    }
    console.log("Current is");
    console.log(currentCalorie);
    return(
        <>
            <div className='container'>
                <ul className="list-group list-group-horizontal w-50 ">
                    <ListGroup>
                        <FormattedDate date={props.date} />
                    </ListGroup>
                    <ListGroup>{props.meal}</ListGroup>
                    <ListGroup>{props.content}</ListGroup>
                    <div onClick={currentCalorieHandler}>
                        <ListGroup>{currentCalorie}</ListGroup>
                    </div>
                </ul>    
            </div>
        </>
    );
}

export default CalorieRecord;