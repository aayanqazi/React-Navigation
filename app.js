var MenuExample = React.createClass({

    getInitialState: function(){
        return { focused: 0 };
    },
    clicked: function(index){
        this.setState({focused: index});
    },
    render: function() {
        var self = this;
        return (
            <div>
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">{ this.props.items.map(function(m, index){
                    var style = '';
                    if(self.state.focused == index){
                        style = 'focused';
                    }
                    return <li className={style} onClick={self.clicked.bind(self, index)}><a href="#">{m}</a></li>;
                }) }   
                </ul>
                   </nav>
                <div className="jumbotron">
                <center><h1>{this.props.items[this.state.focused]}</h1></center>
             
                </div>
            </div>
        );

    }
});

ReactDOM.render(
    <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.getElementById('app')
);