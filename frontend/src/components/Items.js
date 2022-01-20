import React from 'react';
import { Container } from 'react-bootstrap';
import Item from './Item';

const Items = ({ itemsList, setItemsList }) => {
    return (
        <Container >
            {itemsList.map(item => (
                <Item key={item.id} item={item.input} />
            ))}

        </Container>
    )

};

export default Items;
