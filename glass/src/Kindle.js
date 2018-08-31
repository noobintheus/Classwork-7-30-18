*****ALL OF THE REST OF THE CODE WILL BE IN THIS FILE SEPERATED THE BEST I CAN MAKE IT............

kINDLE:

import React, {Component} from 'react'
import "./App.css"
import Books from "./Books";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BookItemsArray: [],
           mystery: "",
            horror: "",
            comedy: ""
        }
    }

    submitInput = (event) =>
    {
        this.setState(
            {
                [event.target.id]: event.target.value
            });
    }

    submitFunction = (event) =>
    {
        let anotherCollection = {
            fiction: this.state.fiction,
            nonfiction: this.state.nonfiction,
            love: this.state.love}

        this.state.BookItemsArray.push(anotherCollection);

        this.setState({BookItemsArray: this.state.BookItemsArray})

        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <h1>Barnes and nobel</h1>
                <form onSubmit={this.submitFunction}>
                    <div>
                        <label htmlFor="Books">What kind of book do you want?</label>
                        <input type="text" id="books" value={this.state.books} onChange={this.submitInput}/>

                        <select name="book" id="book">
                            <option disabled defaultValue>Please Select</option>
                            <option>Angry</option>
                            <option>poetic</option>
                            <option>sad</option>
                            <option>lonley</option>
                            <option>No Cal</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="paper">What kind of paper do you want?</label>
                        <input type="text" id="paper" value={this.state.paper} onChange={this.submitInput}/>
                    </div>
                    <button>Submit</button>
                </form>
                <div>
                    <label htmlFor="history">History: </label>
                    <FoodItems foodArray={this.state.BookItemsArray}/>
                </div>
            </div>
        );
    }
}

export default Books;

Part two:

import React, {Component} from 'react'

class BookItems extends Component{
    render()
    {
        var allItemsInArray = this.props.bookArray.map(
            eachItem =>
            {
                return(<option key={eachItem.books} value={eachItem}>{eachItem.books}</option>)
            }
        )
        return(<select name="history" id="history">{allItemsInArray}</select>);
    }
}

export default book;
--------------------------------------------------------------------------------------------------------------------------------
ALIENCHARACHTER:
import React, {Component} from 'react'
import './App.css'

class MultiInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            planet: "",
            size: "",
            type:""
        }
    }

    submitFunction = (event) =>
    {
        event.preventDefault();
    }

    submitInput = (event) =>
    {
        //this.setState({tvShow: event.target.value});
        console.log(event.target.id + ": " + event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render()
    {
        return(
            <div className="App">
                <h1>name</h1>
                <form onSubmit={this.submitFunction}>
                    <label htmlFor="namee">TV Show:</label>
                    <input type="text" id="name" onChange={this.submitInput}/>

                    <label htmlFor="planet">planet:</label>
                    <input type="text" id="planet" onChange={this.submitInput}/>

                    <label htmlFor="size">size:</label>
                    <input type="text" id="size" onChange={this.submitInput}/><br/>
                       
                       <label htmlFor="type">type:</label>
                    <input type="text" id="type" onChange={this.submitInput}/> <br/>
                    <button>Submit</button>
                    
                </form>
                <p>name: {this.state.name}</p>
                <p>planet: {this.state.planet}</p>
                <p>type: {this.state.type}</p>
                <p>size: {this.state.type}</p>
            </div>
        );
    }
}

export default MultiInput;

   PART 2:
    im unsure  of this part honestly
   
