new Vue({
    el: "#app",
    data: {
        appName: 'VueJS Calculator',
        values: [],
        result: '',
    },
    methods: {
        press: function(e){
            e.preventDefault();
            if(this.values == [0]){
                this.values=[];
            }
           this.values.push(e.target.innerHTML);
            console.log(e.target.innerHTML);
            
        },
        clear: function(){
            this.values=["0"];
        }
    },
    mounted: function(){
        
    }
})