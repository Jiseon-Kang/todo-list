import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe('App Tests', () => {
    it('render static element', () => {
        render(<App/>)

        expect(screen.getByRole("textbox")).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
    });

    it('입력창에 문자를 입력 후 버튼을 누르면 입력한 내용을 화면에서 볼 수 있다.', async () => {
        render(<App/>)
        await userEvent.type(screen.getByRole("textbox"), 'Hello World')

        await userEvent.click(screen.getByRole('button'))

        expect(screen.getByText('Hello World')).toBeInTheDocument()
    })
})



