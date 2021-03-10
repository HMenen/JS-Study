import React from 'react'

const Context = React.createContext(null);
export class Provider extends React.Component{
  constructor(props) {
    super(props)
    this.store = props.store
    this.state = {
      storeState: this.store.getState(),
      dispatch: this.store.dispatch
    }
    this.clear = () => {}
  }

  componentDidMount() {
    this.clear = this.store.subscribe(() => {
      this.setState({
        storeState: this.store.getState()
      })
    })
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const connect = (mapToProps = () => {}, mapToDispatch = () => {}) => (Component) => (props) => {
  return <Context.Consumer>
    {
      val => {
        const state = mapToProps(val.storeState, props);
        const dispatch = mapToDispatch(val.dispatch, props);
        return <Component {...state} {...dispatch} {...props}/>;
      }
    }
  </Context.Consumer>
}