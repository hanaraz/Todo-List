import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const Input = ({ inputText, setInputText, itemsList, setItemsList }) => {

    const onClick = () => {
        setItemsList([...itemsList, { input: inputText, id: uuidv4() }]);
        setInputText("");
    }

    return <div>
        <InputGroup className="py-5" >
            <FormControl
                placeholder="New Item"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <Button onClick={onClick} variant='success' >
                Add
            </Button>
        </InputGroup>
    </div>;
};

export default Input;
