const React = require('react')
const HomeComponent = require('./components/Home')
const CssJSFile = require('./components/CssJs')

class Home extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <html>
                <head>
                    <CssJSFile.BootsTrapLinkCss/>
                    <CssJSFile.FileCss fileName='main.css'/>
                    <CssJSFile.FileCss fileName='home.css'/>
                </head>
                <body>
                    <h1>{this.props.page} page</h1>
                    <HomeComponent.HomeContent name="home"/>

                    <CssJSFile.BootsTrapScriptJs/>
                    <CssJSFile.FileJs fileName='main.js'/>
                    <CssJSFile.FileJs fileName='home.js'/>
                </body>
            </html>
        )
    }
}

module.exports = Home