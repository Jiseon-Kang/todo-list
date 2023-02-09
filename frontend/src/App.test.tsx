import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import axios from "axios";
import {act} from "react-dom/test-utils";

describe('App Tests', () => {

    beforeEach(() => {
        jest.restoreAllMocks()
        jest.spyOn(axios, 'get').mockResolvedValue({data: []})
        jest.spyOn(axios, 'post').mockResolvedValue({data: undefined})
    });

    it('render static element', async () => {
        await act(() => render(<App/>))

        expect(screen.getByRole("textbox")).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
    });

    it('기존에 입력했던 항목들이 조회된다.', async () => {
        const response = {
            data: [
                {id: '0001', content: "Hello World"}
            ]
        }
        jest.spyOn(axios, 'get').mockResolvedValue(response)
        await act(() => render(<App/>))

        // await waitFor(() => {
        //     expect(screen.getByText("Hello World")).toBeInTheDocument()
        // })
        expect(await screen.findByText("Hello World")).toBeInTheDocument()
    })

    describe("Todo Create Tests", () => {

        let spyAxiosPost: any

        beforeEach(() => {
            spyAxiosPost = jest.spyOn(axios, 'post').mockResolvedValue({data: undefined})
            const spyAxiosGet = jest.spyOn(axios, 'get')
            spyAxiosGet.mockResolvedValueOnce({data: []})
            spyAxiosGet.mockResolvedValue({
                data: [
                    {id: '0001', content: "Frontiers"},
                    {id: '0002', content: "Hello World"}
                ]
            })
        })

        it('입력창에 문자를 입력 후 버튼을 누르면 입력한 내용을 화면에서 볼 수 있다.', async () => {
            await act(() => render(<App/>))
            await userEvent.type(screen.getByRole("textbox"), 'Hello World')

            await userEvent.click(screen.getByRole('button'))

            expect(spyAxiosPost).toHaveBeenCalledWith(
                '/todo',
                {content: 'Hello World'}
            )
            await waitFor(() => {
                expect(screen.getByText('Frontiers')).toBeInTheDocument()
                expect(screen.getByText('Hello World')).toBeInTheDocument()
                expect(screen.getByRole('textbox')).toHaveValue('')
            })
        })

        it('입력창에 문자를 입력 후 엔터 키를 누르면 입력한 내용을 화면에서 볼 수 있다.', async () => {
            await act(() => render(<App/>))

            await userEvent.type(screen.getByRole('textbox'), 'Hello World')

            await userEvent.type(screen.getByRole('textbox'), '{enter}')

            expect(spyAxiosPost).toHaveBeenCalledWith(
                '/todo',
                {content: 'Hello World'}
            )
            await waitFor(() => {
                expect(screen.getByText('Frontiers')).toBeInTheDocument()
                expect(screen.getByText('Hello World')).toBeInTheDocument()
                expect(screen.getByRole('textbox')).toHaveValue('')
            })
        })
    })
})