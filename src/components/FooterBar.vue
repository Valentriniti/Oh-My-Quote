<template>
    <footer id="footerQuote">
        <img src="../assets/1bubble-speech.png" alt="" width="25">
        <div class="d-flex justify-content-center mt-3">
            <p>Oh My Quote - <a href="https://github.com/Valentriniti/Oh-My-Quote" id="github">Valentina Roco</a> - 2023</p>
        </div>
    </footer>
</template>
    
<script>
    export default {
    name: 'FooterBar', 
    }
</script>
    
<style>

#footerQuote{
    position: absolute;
    background-color: #000000;
    padding: 15px;
    text-align: center;
    font-size: 14px;
    color: azure;
    height: 6rem;
    width: 100%;
    bottom: 0;
    }

 #github {
    color: white;
    text-decoration: none;
 }   
 #github:hover {
    color: #F2B119;
 }   
</style>