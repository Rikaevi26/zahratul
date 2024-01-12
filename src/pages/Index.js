import React, { Fragment } from "react";

function Index(){
    return(
        <Fragment>
            <div class="wrapper">
  	  <div class="col-md-12">
        
         <div class="brand wow fadeIn" data-wow-delay="0.1s">PORTOFOLIO
           <div class="title">  </div>
         </div>

        
         <nav class="navbar navbar-default" role="navigation">
            
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                
                <div class="navbar-brand"><a href="#">Patsy Doherty</a>
                <div class="title"> - hat designer - </div>
                </div>
            </div>
           
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                   <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Home<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="index.html">Home1</a>
                            </li>
                            <li>
                                <a href="index-work.html">Home2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                       <a href="about.html">About</a>
                    </li>
                   
                    
                    
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            
         </nav>
         
         <div class="col-md-12 wow fadeIn" data-wow-delay="0.1s">
             
                  <h1>Zahratul Jannah</h1>
                  <div class="hr"></div>
                  <p>TEMPAT TANGGAL LAHIR : Jember, 17 juni 2006</p>
                  <p>ALAMAT : Sumberagung</p>
                  <p>SEKOLAH: SMKN 6 JEMBER</p>
                  <div class="text-center">
                     <a href="collection.html" class="home-btn btn">View collection</a>
                  </div>  
          </div>
          
          <div class="box-home col-md-4 col-xs-offset-1">
               
               <p>PENDIDIKAN</p>
               <p>TK DEWI SARTIKA</p>
               <p>SDN SUMBERAGUNG 04</p>
               <p>SMPN 2 JOMBANG</p>
               <p>SMKN 6 JEMBER</p>
            
          </div>
          
          <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
             <div class="first">
             <div class="square wow fadeInDown" data-wow-delay=".5s"></div>
             </div>
          </div>
         
          
          <div class="footer col-md-6 col-xs-offset-3">
             <h5>Copyright 2016
                 <a href="#"><i class="fa fa-facebook fa-1x icon1"></i></a>
                 <a href="#"><i class="fa fa-twitter fa-1x icon1"></i></a>
                 <a href="#"><i class="fa fa-instagram fa-1x icon1"></i></a>
             </h5>
          </div>
          
          
      </div>
      

   </div>
   

      
  
   <script src="js/jquery-1.11.0.js"></script>
   
   <script src="js/bootstrap.min.js"></script>
   
   <script src="js/smoothscroll.js"></script>
   
   
   <script src="js/wow.js"></script>
    
   <script>
   new WOW().init();
   </script>

        </Fragment>
     )
}
export default Index;
