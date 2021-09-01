Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            emailList: [],
            totalEmails: 10,
            error: '',
        },
        methods: {
            axiosTemplate() {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        const response = res.data.response;
                        this.emailList.push(response);
                    })
                    .catch(() => {
                        //! VA SOLO IN CASO DI ERRORI
                        this.error = "C'è stato un errore nel caricamento della pagina, si prega di riprovare.";
                    });
            }
        },
        created() {
            for (let i = 0; i < this.totalEmails; i++) {
                this.axiosTemplate();
            };
        },
    });