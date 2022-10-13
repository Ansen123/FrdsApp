import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchdata()
  }
  fetchdata=()=>{
    this.myapi.viewFrds().subscribe(
      (data)=>{
        this.frdsData=data
      }
    )
  }
frdsData:any=[]
  ngOnInit(): void {
  }

}
