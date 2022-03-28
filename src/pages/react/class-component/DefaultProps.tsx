import { Component } from 'react'
interface IProps {
    name: string
}
export default class DefaultProps extends Component<IProps> {
    static defaultProps = { name: "默认我是xxx" }

    render() {
        return (
            <>
                <div>ClassComponent</div>
                <div>{this.props.name}</div>
            </>
        )
    }
}
