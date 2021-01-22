import { MDBContainer } from 'mdbreact';
import React, { Component } from 'react';
import {  MDBRow, MDBCol,MDBCard, MDBCardBody, MDBIcon, MDBMask, MDBView, MDBBtn } from "mdbreact";
import queryString from "query-string";

import YouTube from 'react-youtube';
// 
import Gallery from 'react-grid-gallery';
import GallaryImages from '../Gallary/galaryImages';
// import YoutubePlayerComp from './youtubeplayer';
var groupObj = require('@hunters/group-object');

class albumPosts extends Component {
constructor(props){
 super(props);

 let search = queryString.parse(this.props.location.search);

    this.state = { 
        search:search,
        posts:{data:[],paging:{}},
        seeMoreImagesId:"",
        loading:true,
        albumData:{},
        albumPosts:[]
      };
}

async componentDidMount(){
  
  this.setState({loading:true});  
  window.scrollTo({ top: 0, behavior: "smooth" });
  
// console.log("Albums ")
// console.log(search)
let facebookAlbumPath='https://graph.facebook.com/' + "100180088170173?fields=description,posts{attachments,message,created_time}"
+"&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD";
// this.initFBdata(facebookAlbumPath,1);

let facebookAlbumDataPath='https://graph.facebook.com/' + this.state.search.fbId +"?fields=description,name,photos{target,images,created_time,name,event,updated_time}"
+"&access_token=EAAJvjLe71rMBAEuQEAWbAUE3M59B1OhB8qn2akftaxw62mW5TiBZCZAtaeusVGPOSLca68ua20jyB8huYsZBJENoVHQui1dnIvwnhTZBYlVG7ViAUtjz9vmROhk4N5Nt96ovYTMyBRVtIuGYNoag8j9flZAZCldlcWDKsdGgd4AQZDZD";
this.initFBAlbumdata(facebookAlbumDataPath,1);
    var local= JSON.parse(localStorage.getItem("albumPost"));
     
      // this.setState({albumPosts:local,loading:false})  
console.log("local ")
console.log(local)

}



initFBAlbumdata(albumsUrl,countpage){
  fetch(albumsUrl)
    .then(response => response.json())
    .then(data => 
      {   
      console.log("Album posts data")
      console.log(data)
    //   console.log(data.photos.data)
      
var groupedData = groupObj.group(data.photos.data,'created_time');
      console.log("Album posts datvalua")
      groupedData=Object.values(groupedData);
console.log(groupedData); 
localStorage.setItem("albumPost", JSON.stringify(groupedData))
// Object.keys(a).map(function(key){return a[key]})
      this.setState({albumPosts:groupedData, albumData:data,loading:false})  
        });
    

}

 

initFBdata(albumsUrl,countpage){
    fetch(albumsUrl)
      .then(response => response.json())
      .then(data => 
        {   
        // console.log("posts data")
        // console.log(data)
        this.setState({posts:data.posts,loading:false})  
          });
      
  
  }
  
parseTime = (minute) => {
  let hours = parseInt(minute / 60);
  let minutes = minute % 60;
  return <span>{hours + "hrs " + minutes + "mins"}</span>;
};

parseDate = (dateString) => {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  };
  
  let date = new Date(dateString);
  let newDate = date.toLocaleString("en-GB", options);
  return <span>{newDate}</span>;
};
 
postGallaryImages = (data2,seeall) => {
    // console.log("postGallaryImages");
    // console.log(images.attachments.data);
    let photos=[];
    let SinglePhoto;
    let attachement =data2;
    if(data2){
    // if(attachement){
        let length;
        let maxlength=5
        if((seeall==true)||(maxlength>attachement.length)){
            length=attachement.length;
        }
        else{
            length=maxlength;
        }
        
        for(let i=0;i< length;i++){ 
                  SinglePhoto={ 
            // //           isSelected: true,
            caption: attachement[i].name,
            src: attachement[i].images[0].source,
            thumbnail:  attachement[i].images[(( attachement[i].images.length)-2)].source,
            thumbnailWidth: attachement[i].images[0].width,//320,
            thumbnailHeight: attachement[i].images[0].height,//174,
              }
                  photos.push(SinglePhoto); 
                }
    // }

       return( 
       <>
       <GallaryImages post={photos}></GallaryImages> 
       </>
        )
    }
  
};

  render() {
    
return(  
   <> 
  {this.state.loading  && 
  
  <>
    <MDBContainer>
      <div  className="mt-5 px-2 pb-2 z-index-0  text-center">
        <h3> Loading </h3>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>

    </MDBContainer>
    </>
    }
    
   {!this.state.loading &&
    <>
<div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader mb-4'
          src={'https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/126404678_212481473606700_4787511284135086667_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=JICjdbQKDGwAX-Wtcqq&_nc_ht=scontent.fadd1-1.fna&oh=a4b006ac110ab307f7b1afe5117583ae&oe=5FF19D59'}
          fixed
        >
          <MDBMask className='rgba-black-light gradient' color="mdb-color darken-2"/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}

          <MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  KNOW
                  <span className='indigo-text font-weight-bold'> GEDEO</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>

          </MDBContainer>
          
        </MDBView>


</div>  
  

<MDBContainer  className="mt-5 ">
{this.state.albumData&&
<>
 
   
<h2 className="h1-responsive font-weight-bold text-center ">
          {this.state.albumData.name}
        </h2>
          <p className="dark-grey-text">
          {this.state.albumData.description}
          </p>
        </>
 
}       
{this.state.albumPosts.map((post,index)=>
<>

{/* {(post.attachments&& post.message)&& */}
<MDBCard className="my-5 px-2  pb-5">
      <MDBCardBody>
        <MDBRow>
            
          <MDBCol lg="12" xl="12">
            {post[0].name&&
            <h5 className="dark-grey-text font-weight-bold">
           <span className=" blue-dark-text"> 
           {post[0].name.substring(0, 50)}...
           </span>
            </h5>}
            <p className="dark-grey-text">
            {post[0].name}
            </p>
            <p>
              {post[0].created_time}
            </p>
            
          </MDBCol>


          <MDBCol lg="12" xl="12">
              {post&& 
   <>           
{(this.state.seeMoreImagesId==post[0].created_time)&&
<>
{this.postGallaryImages(post,true)}
</>
}
{(this.state.seeMoreImagesId!=post[0].created_time)&&
<>
{this.postGallaryImages(post,false)}
</>
}
 </>
  }  
   </MDBCol>

            {(this.state.seeMoreImagesId==post[0].created_time)&&
        <MDBBtn color="primary" rounded outline size="sm"  onClick={() =>{this.setState({seeMoreImagesId:""})}}>
              see less
            </MDBBtn>
            }
        {(this.state.seeMoreImagesId!=post[0].created_time)&&
        <MDBBtn color="primary" rounded outline size="sm"  onClick={() =>{this.setState({seeMoreImagesId:post[0].created_time})}}>
              see more
            </MDBBtn>
            }
        </MDBRow> 

     
      </MDBCardBody>
    </MDBCard>
  
          {/* } */}
</>)}

        </MDBContainer>       
        
</>  
}
  </>
) 
 }
}

export default albumPosts;