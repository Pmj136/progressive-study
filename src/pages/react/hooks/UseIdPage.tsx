import { useId } from 'react'

interface IProps {

}

function UseIdPage(props: IProps) {
    const id1 = useId()
    const id2=useId()
    console.log(id1)
    console.log(id2)
    return (
        <div>

        </div>
    )
}

export default UseIdPage
