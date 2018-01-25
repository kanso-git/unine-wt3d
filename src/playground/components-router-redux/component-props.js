
/**
 * by extending the React.Component we are pulling down the React Component behavior to our class Header
 * React.Component has a mandatory method to implement which is render
 * 
 * React class should start with uppercase otherwise will not work  
 */

class  MyApp extends React.Component{
   
    render(){
        const title ='this is my app header';
        const subTitle='this is my sub title';
        const options =['thing one','thing tow','thing three'];
        return (
            <div>
                <Header  title={title} subTitle={}/>
                <Body options={options}/>
                <Footer />
            </div>
        )
    }
    
}

class Header extends React.Component{

    render(){
        return (
            <div>
                <p> {this.props.title}</p>
            </div>   
        );
    }
}



class Body extends React.Component{

    render(){

        return (
            <div>
              { 
                  this.props.options.map((option)=> <BodyOption optionText={option} key={option}/> )
              }
            </div>
        )
    }
}

class BodyOption extends React.Component{
    
        render(){
            return (
                <div >{this.props.optionText} </div>
            )
        }
    }

class Footer extends React.Component {
    render(){
        return <p> this is my footer </p>
    }
}



ReactDOM.render(<MyApp />, document.getElementById('app'));