import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const Item = ({ item, id, itemsList, setItemsList }) => {

    const handleDelete = () => {
        setItemsList(
            itemsList.filter(i => i.id !== id)
        )

    }
    return (
        <div>
            <Row className='py-1'>
                <Col xs={4}>
                    <h4>{item}</h4>
                </Col>
                <Col xs={2}>
                    <Button onClick={handleDelete} className='p-2' variant="danger" >Delete</Button>
                </Col>
            </Row>
        </div>
    )
};

export default Item;
