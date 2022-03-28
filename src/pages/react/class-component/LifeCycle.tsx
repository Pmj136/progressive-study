import React, { Component } from 'react'
interface IProps {

}
interface IState {
  count: number
}
export default class LifeCycle extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log('mount');
  }
  componentDidUpdate() {
    console.log('update');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  componentDidCatch() {
    console.log('catch');
  }
  shouldComponentUpdate() {
    return true
  }
  render() {
    return (
      <>
        <div>LifeCycle</div>
        <div>
          {this.state.count}
        </div>
        <button onClick={() => {
          this.setState((prep) => ({
            count: prep.count + 1
          }))
        }}>change</button>
      </>
    )
  }
}
