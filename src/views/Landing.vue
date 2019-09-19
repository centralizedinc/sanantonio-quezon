<template>
  <div>
      <div style="background-image:url('https://mediaprocessor.websimages.com/fit/1920x1920/sanantonio-quezon.webs.com/San%20Antonio-4.jpg'); height:100%;background-repeat: no-repeat;
  background-size: cover;">
      <!-- <div style="background: linear-gradient(to right, #fffbd5, #b20a2c)"> -->
        <!-- <a-row type="flex" justify="center" > 
          <a-col :span="24" style="margin-top:15vh;">
            <a-card style="background-image:url('https://mediaprocessor.websimages.com/fit/1920x1920/sanantonio-quezon.webs.com/San%20Antonio-4.jpg'); height:100%;background-repeat: no-repeat;
  background-size: cover;"> -->
        <a-row style="height:100vh; " type="flex" justify="start" >
        <a-col :push="1" :span="12" style="margin-top:20vh">
          <div style="font-size: 52px; color:#FFFFFF ">San Antonio, Quezon</div>
          <div style="font-size: 42px; color:#FFFFFF">Ease of Doing Business Portal</div>
          <p style="margin-top:2vh; color:#FFFFFF">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a-button style="margin-top:5vh"  size="large" type="primary">Read More</a-button>  
        </a-col>
        <a-col :push="2" :span="8" style="margin-top:20vh;">
          <a-card style="background: rgba(14, 9, 9, 0.58)">
            <template slot="title">
              <div style="color:#ffffff">Enter Crendetials</div>
            </template>
             <a-form>
              <a-form-item>
                <a-input size="large" placeholder="Email">
                  <a-icon slot="prefix" type="mail" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input size="large" placeholder="Password" :type="reveal?'text':'password'">
                  <a-icon slot="prefix" type="lock" />
                  <a-icon slot="suffix" :type="reveal?'eye':'eye-invisible'" @click="reveal=!reveal" style="cursor:pointer"/>
                </a-input>
              </a-form-item>
              <a-button size="large" block ghost style="margin-bottom: 2vh">Login</a-button>
              <a href="#" style="color:#FFFFFF" @click="signup">I don't have an account. Sign me up.</a>
              <a-divider></a-divider>
              <p style="color:white; margin-top:-2vh">Login using facebook or google accounts</p>
              <a-row type="flex" gutter="16">
                <a-col :span="12">
                  <a-button class="social_btn" block style="border: #4267B2;background-color:#4267B2; color:#FFFFFF" @click="registerFacebook"> <a-icon type="facebook"></a-icon>Facebook</a-button>
                </a-col>
                <a-col :span="12">
                  <a-button class="social_btn" block @click="registerGoogle" style="border: #DE4935;background-color:#DE4935; color:#FFFFFF"> <a-icon type="google"></a-icon>Google</a-button>
                </a-col>
              </a-row>
            </a-form> 
          </a-card>
        </a-col>
      </a-row>  
      <!-- </a-card>
          </a-col>
        </a-row>           -->
      </div>
      <a-row :gutter="16" type="flex" align="middle" style="margin-top:10vh; margin-left:5vh; margin-right:5vh">
        <a-col :span="8">
          <a-card title="News/Announcements">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a-divider></a-divider>
          <a-button type="primary" @click="$router.push('/news')">Read More</a-button>
          </a-card>
        </a-col>
         <a-col :span="8">
          <a-card title="Permits and Certificates">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus laoreet non. Lectus mauris ultrices eros in cursus turpis. Consectetur a erat nam at lectus. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ac turpis egestas maecenas pharetra. Donec pretium vulputate sapien nec. Scelerisque viverra mauris in aliquam.
            <a-divider></a-divider>
          <a-button type="primary" @click="$router.push('/permits')">Apply Now</a-button> 
          </a-card>
        </a-col>
         <a-col :span="8">
          <a-card title=" Report Emergency/Calamity">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis a cras semper auctor neque. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Congue nisi vitae suscipit tellus mauris a. Viverra adipiscing at in tellus integer feugiat. Etiam sit amet nisl purus in. Curabitur gravida arcu ac tortor dignissim. Magna fermentum iaculis eu non diam phasellus vestibulum.
          <a-divider></a-divider>
          <a-button type="primary">Report</a-button>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="16" type="flex" align="middle" style="margin-top:10vh; margin-left:5vh; margin-right:5vh;">
        <a-col :span="24">
          <h1>News/Announcements</h1>
          <a-divider></a-divider>
        </a-col>
        <a-col :span="14">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </a-col>
        <a-col :span="8">
          <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/icloud/macos-mojave-ios12-macbook-ipad-pro-iphone-x-set-up-icloud-drive-hero.jpg" width="100%">
        </a-col>
      </a-row>
      <a-row :gutter="16" type="flex" align="middle" style="margin-top:10vh; margin-left:5vh; margin-right:5vh">
        <a-col :span="24">
          <h1>Permits and Certificates</h1>
          <a-divider></a-divider>
        </a-col>
        <a-col :span="8">
          <img  width="100%" src="https://basecamp.com/assets/general/devices-medium-1047d88c14b1c02d9415d18799ccd289eb16d6733166b4529f317faeb28621c6.png" alt="">
        </a-col>
        <a-col :span="14">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Pharetra pharetra massa massa ultricies. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Interdum consectetur libero id faucibus nisl tincidunt eget. Sapien pellentesque habitant morbi tristique. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Facilisis gravida neque convallis a cras semper auctor. Vitae nunc sed velit dignissim. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.</p>
          <p>Malesuada fames ac turpis egestas integer eget aliquet. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Tortor consequat id porta nibh venenatis cras sed. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Cursus mattis molestie a iaculis at. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Neque egestas congue quisque egestas diam in arcu cursus euismod. Pharetra magna ac placerat vestibulum lectus. Sit amet tellus cras adipiscing enim eu turpis egestas. Viverra tellus in hac habitasse.</p>
        </a-col>
      </a-row>
      <a-row :gutter="16" type="flex" align="middle" style="margin-top:10vh; margin-left:5vh; margin-right:5vh; margin-bottom:10vh">
        <a-col :span="24">
          <h1>Report Emergency/Calamity</h1>
          <a-divider></a-divider>
        </a-col>
        <a-col :span="14">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean. Interdum varius sit amet mattis vulputate enim nulla. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Odio tempor orci dapibus ultrices in iaculis nunc. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Ac feugiat sed lectus vestibulum mattis. Aliquet nec ullamcorper sit amet. Feugiat vivamus at augue eget arcu. Faucibus et molestie ac feugiat sed lectus vestibulum. Tristique nulla aliquet enim tortor at auctor urna. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Arcu non odio euismod lacinia at quis risus. Eget sit amet tellus cras adipiscing enim eu turpis egestas. A cras semper auctor neque vitae tempus quam. Vitae justo eget magna fermentum iaculis eu non diam phasellus.</p>
          <p>Laoreet suspendisse interdum consectetur libero id faucibus. Morbi tristique senectus et netus et malesuada. Mi bibendum neque egestas congue. Neque sodales ut etiam sit amet nisl purus in mollis. Vitae et leo duis ut diam quam nulla. Convallis posuere morbi leo urna molestie. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Id consectetur purus ut faucibus pulvinar elementum integer. Id aliquet lectus proin nibh nisl. Adipiscing diam donec adipiscing tristique risus nec.</p>
        </a-col>
        <a-col :span="8">
          <img width="100%" src="https://bjango.com/images/mac/skalapreview2/skala-preview-hero.jpg" alt="">
        </a-col>
      </a-row>
  </div>
  
</template>

<script>
export default {
  data(){
    return {
      reveal:false
    }
  },
    methods:{
      signup(){
        this.$emit('signup')
      },
        registerFacebook(){
            window.open(`${process.env.VUE_APP_BASE_API_URI}/auth/facebook`, "", "width=500,height=450")
            this.signup_visible = false;
        },
        registerGoogle(){
            window.open(`${process.env.VUE_APP_BASE_API_URI}/auth/google`, "", "width=500,height=450")
            this.signup_visible = false;
        },

    }

}


        // Facebook SDK plugin

//         window.fbAsyncInit = function() {
//   FB.init({
//     appId: "2463482707080808",
//     xfbml: true,
//     version: "v4.0"
//   });
// };

// (function(d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");


</script>
<script>
      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    </script>
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId: "2463482707080808",
          xfbml            : true,
          version          : 'v4.0'
        });
      };

      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

<style>
.social_btn:hover{
  opacity:0.9;
  transform: scale(1.05);
}
</style>