<template>
    <footer id="footerQuote" class="fixed-bottom">
        <img src="../assets/1bubble-speech.png" alt="" width="22">
        <div class="d-flex justify-content-center mt-2">
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
    background-color: #000000;
    padding: 12px;
    text-align: center;
    font-size: 14px;
    color: azure;
    height: 5rem;
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