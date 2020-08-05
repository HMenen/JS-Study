class ToolBar extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        toolbar
      </div>
    )
  }
}


class Parent extends React.Component {
  state = {
    width: 200
  }
  render() {
    return (
      <div style={{ width: this.state.width }}>
        {this.props.children}
      </div>
      // React.createElement({
      //   type: 'div',
      //   props: {
      //     style: {{ width: this.state.width }}
      //     children: React.createElement({
      //       type: ToolBar,
      //       props: {}
      //     });
      //   }
      // });
  )
}


class App extends React.Component {
  render() {
    return (
      <div>
        <Parent>
          <ToolBar />
        </Parent>
        <div>content</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'), function() {

}); 