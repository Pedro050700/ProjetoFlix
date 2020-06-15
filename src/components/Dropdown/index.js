import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Container, CustomDropDown } from './styles';

function DropdownWrapper() {
    return (
        <>
            <CustomDropDown margin="30px">
                <CustomDropDown.Toggle
                    variant="success"
                    id="CustomDropDown-basic"
                >
                    Dropwdown Button
                </CustomDropDown.Toggle>

                <CustomDropDown.Menu>
                    <CustomDropDown.Item href="#/action-1">
                        Action
                    </CustomDropDown.Item>
                    <CustomDropDown.Item href="#/action-2">
                        Another action
                    </CustomDropDown.Item>
                    <CustomDropDown.Item href="#/action-3">
                        Something else
                    </CustomDropDown.Item>
                </CustomDropDown.Menu>
            </CustomDropDown>
        </>
    );
}

export default DropdownWrapper;
