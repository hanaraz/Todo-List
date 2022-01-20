import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Input = ({ inputText, setInputText, itemsList, setItemsList }) => {

    const [idCreator, setIdCreator] = useState(0);
    const onClick = () => {
        setItemsList([...itemsList, { input: inputText, id: idCreator }]);
        setIdCreator(idCreator + 1);
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
