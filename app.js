const app = Vue.createApp({
    data() {
        return{
            name: 'Sonwabile',
            surname: 'Gxoyiya',
            currentAge: 22,
            image: 'Soso.jpg',
            myPhysicalAddress: "1706 FakeAddress Road"
        };
    },

    methods:{
        generateNumber(){
            //const randNumber = Math.floor(Math.random() * 16);
            //return randNumber;
            return Math.floor(Math.random() * 16);
        },

        ageInFiveYears(){
            
            //const ageInFiveYears = this.currentAge + 5;
            return this.currentAge + 5;
        }

    }


});

app.mount('#profile');