import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  id=""
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  readValues=()=>{
  let data={
"id":this.id,
"name":this.name,
"friendName":this.friendName,
"friendNickName":this.friendNickName,
"DescribeYourFriend":this.DescribeYourFriend
}
console.log(data);
this.myapi.addFrds(data).subscribe(
  (response)=>{
    console.log(response)
    alert("Success")
  }
)


  }

  ngOnInit(): void {
  }

}
