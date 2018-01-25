
/**
 * by extending the React.Component we are pulling down the React Component behavior to our class Header
 * React.Component has a mandatory method to implement which is render
 * 
 * React class should start with uppercase otherwise will not work  
 */

class  MyApp extends React.Component{

    render(){
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
    
}

class Header extends React.Component{

    render(){
        return <p> this is from my header</p>;
    }
}



class Body extends React.Component{

    render(){
        return <p> this is from my body</p>;
    }
}

class Footer extends React.Component {
    render(){
        return <p> this is my footer </p>
    }
}



ReactDOM.render(<MyApp />, document.getElementById('app'));