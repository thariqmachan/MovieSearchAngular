import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-moviesearcg',
  templateUrl: './moviesearcg.component.html',
  styleUrls: ['./moviesearcg.component.css']
})
export class MoviesearcgComponent implements OnInit{

  result:any=false
  title:any="none"
  name:any=""
  release:any=""
  actors:any=""
  plot:any=""
  poster:any=""
  rating:any=""

  movieform=this.fb.group({

    title:['']

  })

  constructor(private fb:FormBuilder) {

  }

  ngOnInit(): void {
    
  }

  
    search(){
      this.result=true
      this.name=this.movieform.value.title
  
      alert(this.name)
  
      fetch(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${this.name}`).then(data => data.json()).then(wdata => {
  
        console.log(wdata);
        
        
        this.release=wdata.Released
        this.actors=wdata.Actors
        this.plot=wdata.Plot
        this.poster=wdata.Poster
        this.rating=wdata.Ratings[0].Value
  
        console.log(this.poster);
        
        
        
  
  
  
    })
  
  
  
    }

  }   


