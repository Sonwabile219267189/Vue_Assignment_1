const app = Vue.createApp({
    data() {
        return{
            name: 'Sonwabile',
            surname: 'Gxoyiya',
            currentAge: 22,
            agePlus5: 27, 
            image: 'Soso.jpg',
            myPhysicalAddress: "1706 FakeAddress Road"
        };
    },

    methods:{
        generateNumber(){
            const randNumber = Math.floor(Math.random() * 16);
            return randNumber;
        }

    }


});

app.mount('#profile');