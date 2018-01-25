
/**
 * 
 * React stateless component is a function thst return a JSX template 
 * when you use a stateless component over a based class component 
 * when you don't need to manage state then stateless component should do the work for you
 * 
 * please note that stateless component dosen't have access to 'this' but the props get passed to it
 * so you can use them . 
 *    
 */

class  MyApp extends React.Component{
 
    render(){
        const footerText ='blah blah';
        return (
            <div>
                <Header />
                <Body />
                <Footer footerText={footerText} />
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
Body.defaultProps ={
    
}
const Footer = (props)=>{
    return <p> {props.footerText}</p>;
}
Footer.defaultProps={
    footerText:'contact us we will be happy to help '
}


ReactDOM.render(<MyApp />, document.getElementById('app'));