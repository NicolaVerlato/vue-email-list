var app = new Vue(
    {
        el: '#root',
        data: {
            emails: []
        }, 
        methods: {
            printRandomEmails(){
                for(let i = 1; i <= 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        const randomEmail= response.data.response;
                        this.emails.push(randomEmail)
                    });
                }
            },
        },
        mounted() {
            this.printRandomEmails()
        }
    }
)