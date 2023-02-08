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

    it('입력창에 문자를 입력 후 버튼을 누르면 입력했던 값은 창에서 지워진다.', async () => {
        render(<App/>)
        await userEvent.type(screen.getByRole("textbox"), 'Hello World')

        await userEvent.click(screen.getByRole('button'))

        expect(screen.getByRole('textbox')).toHaveValue('')
    })

    it('입력창에 문자를 입력 후 엔터 키를 누르면 입력한 내용을 화면에서 볼 수 있다.', async () => {
        render(<App/>)
        await userEvent.type(screen.getByRole('textbox'), 'Hello World')

        await userEvent.type(screen.getByRole('textbox'), '{enter}')

        expect(screen.getByText('Hello World')).toBeInTheDocument()
    })
})



