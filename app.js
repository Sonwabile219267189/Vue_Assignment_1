const app = Vue.createApp({
    data() {
        return{
            name: 'Sonwabile',
            surname: 'Gxoyiya',
            ageText: 'My Current Age:',
            ageInFiveYearsText: 'My Age in 5 Years:',
            currentAge: 22,
            numberGenText: 'Generate Random Number:',
            image: 'joeri-romer-Xne1N4yZuOY-unsplash.jpg',
            addressText: 'My Physical Address:',
            myPhysicalAddress: "11 Hans Strijdom Ave, Cape Town City Centre"
        };
    },

    methods:{
        generateNumber(){
            return Math.floor(Math.random() * 16);
        },

        ageInFiveYears(){
            return this.currentAge + 5;
        }
    }
});

app.mount('#profile');