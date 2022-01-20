import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Input = () => {
    return <div>
        <InputGroup className="py-5" >
            <FormControl
                placeholder="New Item"
            />
            <Button variant='success' >
                Add
            </Button>
        </InputGroup>
    </div>;
};

export default Input;
