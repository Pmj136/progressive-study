import { useEffect, useId } from 'react'

interface IProps {

}

function UseIdPage(props: IProps) {
    const id1 = useId()
    const id2 = useId()
    return (
        <div>
            <p>random id</p>
            <h2>{id1}</h2>
            <h2>{id2}</h2>
        </div>
    )
}

export default UseIdPage
