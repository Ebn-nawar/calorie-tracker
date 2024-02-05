import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CalorieRecordEdit() {
return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="calories">
                <Form.Label>calories</Form.Label>
                <Form.Control type="number" placeholder="type your Calories" />
            </Form.Group>   
            <Form.Group className="mb-3" controlId="calories">
                <Form.Label>calories</Form.Label>
                <Form.Control type="number" placeholder="type your Calories" />
            </Form.Group>   
            <Form.Select aria-label="meal">
                <option>Select your meal</option>
                <option value="breakfast">breakfast</option>
                <option value="dinner">dinner</option>
                <option value="lunch">lunch</option>
                <option value="snaks">snaks</option>
            </Form.Select>
            <br />
            <Form.Group className="mb-3" controlId="Food">
                <Form.Label>Food</Form.Label>
                <Form.Control type="text" placeholder="type your food" />
            </Form.Group>            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
);
}



export default CalorieRecordEdit;