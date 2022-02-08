const React = require('react')

class HomeContent extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <p>this is a {this.props.name} Component</p>
        )
    }
}

const HomeComponent = {
    HomeContent: HomeContent
}

module.exports = HomeComponent

