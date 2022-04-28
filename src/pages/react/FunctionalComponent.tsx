interface IProps {
    age: number
}

const defaultProps = {
    age: 21
}

function FunctionalComponent(props: IProps & typeof defaultProps) {
    console.log(props.age)
    return (
        <div>FunctionalComponent</div>
    )
}

FunctionalComponent.defaultProps = defaultProps
export default FunctionalComponent
