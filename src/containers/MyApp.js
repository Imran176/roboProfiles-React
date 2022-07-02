import React,{ Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";

class MyApp extends Component {
    constructor(){
        super()
        this.state = {
            users : [],
            searchField : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({ users : user}))
    }

    onsearchChange = (event) => {
        this.setState({ searchField: event.target.value})
    }

    render() {
        const filteredUsers = this.state.users.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if(this.state.users === 0){
            return(
                <h1>Loading</h1>
            );
        }
        else{
            return(
                <div className= 'tc'>
                    <h1 className= 'f1'>RoboFriends</h1>
                    <SearchBox searchChange={ this.onsearchChange }/>
                    {/* <Scroll> */}
                        <CardList robots={ filteredUsers }/>
                    {/* </Scroll> */}
                </div>
            );
        }
    }
}

export default MyApp;