import React, { Component } from 'react'
import SearchBar from './components/searchbar'
import './App.css';
import MovieCard from './components/moviecard'
import PlusMovie from './components/PlusMovie';
import {tabMovies} from './data'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tabMovies:tabMovies,
      loading: true,
      search:"",
      rating:"",
      mymovielist: [MovieCard]
      // stars: ["☆","☆","☆","☆","☆"],
      // minimunrate: 4
    }
  }

  createMovie=(newmovie)=>{
    this.setState({
      tabMovies:[...this.state.tabMovies,newmovie]
    })
  }

  search=(searchMovie)=>{
    this.setState({
      search:searchMovie
    })
  }
 
  minRate=(x)=>{
    this.setState({
      rating:x
    })
  }

  
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };
 

  render() {
   
   
    return (
      <div className="App">
         <div className="frame">
         
                   <div className="camera"></div>
                   <div className="appcontent">
                        <div className="appheader">
                       <SearchBar search={this.search} minRate={this.minRate} rating={this.state.rating}/>
                       
                       {/* <MinRating className="minrating" count={this.state.minimunrate} onClick={} /> */}
                        </div>
                        <div className="movielist">
                          <MovieCard loading={this.state.loading} movie={this.state.tabMovies} search={this.state.search} rate={this.state.rating}/>
                            {/* <MovieCard movie={this.state.movies.filter(e => e.rate >= this.state.minimunrate)} stars={this.state.stars}/> */}
                            
                            <PlusMovie createMovie={this.createMovie}/>
                          
                        </div>
                  </div>
                  <div className="ipadbutton"></div> 
                  </div>
      </div>
    )
  }
}
