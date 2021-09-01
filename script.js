Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            emailList: [],
        },
        methods: {
            axiosTemplate() {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        const response = res.data.response;
                        this.emailList.push(response);
                    })
                    .catch((error) => {
                        //! VA SOLO IN CASO DI ERRORI
                        console.log(error);
                    });
            }
        },
        created() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    const response = res.data.response;
                    this.emailList = response;
                })
                .catch((error) => {
                    //! VA SOLO IN CASO DI ERRORI
                    console.log(error);
                });
        },
    });