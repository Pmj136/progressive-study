import React, { useEffect } from 'react'
import { get, post } from "./test_lib/http";

interface IProps {

}

const getUser = () => get("/user")
const postUser = () => post("/user", { username: "彭明久" })

function TypeScriptPage(props: IProps): JSX.Element {
    useEffect(() => {
        getUser().then(res => {
            console.log(res)
        })
    }, [])
    return (
        <div>
            <button onClick={postUser}>post user</button>
        </div>
    )
}

export default TypeScriptPage
