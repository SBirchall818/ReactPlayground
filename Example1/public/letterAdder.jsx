var Name = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Name Tag</h2>
                <div>{this.props.localName}</div>
            </div>
        )
    }
});

var LetterButton = React.createClass({
    localAddLetter: function() {
        this.props.addLetter(this.props.letter);
    },
    render: function() {
        return (
            <button onClick={this.localAddLetter}>{this.props.letter}</button>
        )
    }
});

var LetterAdder = React.createClass({
    getInitialState: function() {
        return {name: 'Simon'};
    },
    addLetter: function(letter) {
        this.setState({
            name: this.state.name + letter
        });
    },
    render: function() {
        return (
            <div>
            <Name  localName={this.state.name} />
            <LetterButton letter='A' addLetter={this.addLetter} />
            <LetterButton letter='B' addLetter={this.addLetter} />
            <LetterButton letter='C' addLetter={this.addLetter} />
            </div>
        )
    }
})

React.render(<LetterAdder />, document.getElementById("root2"));