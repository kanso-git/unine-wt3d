/**
 * counter example 
 */

 class Counter extends React.Component{
    constructor(props){
        super(props);
        // NB this bind solution will be replaced later with the babel plugin 
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);

        /**
         * in order to setup the state we should follow the setps
         * 
         */

        //step1: set the state
        this.state={
            count:0
        };
    }

    handlePlus(){
      console.log('handlePlus');
      //step 3 -> setup the state based on some event 
      this.setState((state)=>{
        const count = state.count+ 1;
        return {
            count
        }
      })
    }
    handleMinus(){
      console.log('handleMinus');
    }
    handleReset(){
      console.log('handleReset');
    }

    render(){
        return(
            <div>
            <h1> Counter:{this.state.count}</h1>
            <button onClick={this.handlePlus}>+1</button>
            <button onClick={this.handleMinus}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
 }