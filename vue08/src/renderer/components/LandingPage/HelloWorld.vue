<template>
        <div id="FirstTitle">
            <div id="app-8">
                <button id="notification">通知栏</button>
            </div>
        </div>
</template>


<script>
  export default {
    data () {
      return {
        electron: process.versions.electron,
        name: this.$route.name,
        node: process.versions.node,
        path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    }
  }
</script>
<script>
  onload = function () {
    let add = document.querySelector('#notification')
    let ipc = require('electron').ipcRenderer
    add.onclick = () => {
      ipc.send('add')
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
 
   button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
    margin-top: 20px;
  }
</style>
