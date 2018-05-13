import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ShowSlider extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    loadContent () {
        var requestUrl ='https://api.themoviedb.org/3/' + this.props.url + '&api_key=166624c030b91c943c397020f20525b4';
        fetch(requestUrl).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                data: data
            })
        }).catch((err) => {
            console.log('There has been error');
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.url !== this.props.url && nextProps.url !== ''){
            this.setState({
                url: nextProps.url
            }, function () {
                //if we update our input field by typing we want to load our content
                this.loadContent();
            })
        }
    }

    render() {
        let moviestorender = '';
        if(this.state.data.results){

            moviestorender = this.state.data.results.map((movie, i)=>{
                //    moviestorender is a map function that uses the array this.state.data.results, //with the parameters (movie, i)
                if (i < 9)
                {
                    var backDrop = 'http://image.tmdb.org/t/p/original' + movie.backdrop_path;
                    return (
                        <div className='Item' style={{backgroundImage: 'url(' + backDrop + ')'}}></div>
                    )
                }
            })
        }

        return(

            <div ref='titlecategory' className='TitleList' data-loaded={true}>
                <div className='Title'>
                    <div className='titles-wrapper'>
                        <div className='search-container'>
                            {moviestorender}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm:"",
            searchUrl:""
        }

        this.handleChange.bind(this)
        this.handleKeyUp.bind(this)
    }

    handleKeyUp = (event) => {
        if(this.state.searchTerm !== "") //event.key === 'Enter' &&
        {
            var searchUrl =  "search/multi?query=" + this.state.searchTerm + "&api_key=166624c030b91c943c397020f20525b4";
            this.setState({
                searchUrl: searchUrl
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return (
            <div>
                <header className="Header">

                    <div id="search" className="Search">
                        <input onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.searchTerm} placeholder="Search for a title..."/>
                    </div>


                </header>


                <ShowSlider title="Search Results" url={this.state.searchUrl}/>

            </div>
        )
    }
}


export default App;
